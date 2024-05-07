"use client";

import { supabase } from "@/lib/supabase";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import Image from "next/image";
import { useContext, useRef, useState } from "react";

import { LightBoxContext } from "../molecules/LightBox";

interface ItemProps {
  name: string;
}

export default function Item({ ...props }: ItemProps) {
  const ref = useRef(null);

  const lightbox = useContext(LightBoxContext);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const positiveScrollVelocity = useTransform(scrollVelocity, (x) => Math.abs(x));
  const mappedPositiveScrollVelocity = useTransform(positiveScrollVelocity, [0, 100], [1, 0.95]);
  const scale = useSpring(mappedPositiveScrollVelocity, { bounce: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(props.name);

  return (
    <>
      <div className="duration-300 hover:scale-[1.05]">
        <motion.div ref={ref} style={{ scale }} className="overflow-hidden rounded-lg ">
          <motion.div style={{ y, scale: 1.5 }} className="animate-position relative h-full w-full duration-500">
            <Image
              src={publicUrl}
              alt=""
              width={640}
              height={640}
              onClick={() => {
                lightbox.setOpen(true);
                lightbox.setSrc(publicUrl);
              }}
              className="h-auto w-full cursor-pointer object-cover object-center duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
