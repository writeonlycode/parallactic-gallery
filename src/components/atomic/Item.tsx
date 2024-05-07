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

  const [isLoading, setIsLoading] = useState(true);

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
              onLoad={() => setIsLoading(false)}
              className="h-auto w-full cursor-pointer object-cover object-center duration-300"
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
