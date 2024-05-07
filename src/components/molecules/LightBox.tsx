"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createContext, useState } from "react";

interface LightBoxProps {
  children: Readonly<React.ReactNode>;
}

export const LightBoxContext = createContext<any>({
  open: false,
  setOpen: null,
  src: "",
  setSrc: null,
});

export default function LightBoxProvider({ children, ...props }: LightBoxProps) {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <>
      <LightBoxContext.Provider value={{ open, setOpen, src, setSrc }}>{children}</LightBoxContext.Provider>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/75 opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "just" }}
              exit={{ scale: 0 }}
            >
              <Image
                src={src}
                alt=""
                width={1536}
                height={1536}
                className="h-full w-full object-contain px-[2.5rem] py-[1rem]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
