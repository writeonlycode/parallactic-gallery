import DropFile from "@/components/molecules/DropFile";
import DropModal from "@/components/molecules/DropModal";
import LightBoxProvider from "@/components/molecules/LightBox";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Shadows_Into_Light } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const shadows = Shadows_Into_Light({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallactic Gallery",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shadows.className}`}>
        <DropModal render={<DropFile />}>
          <header
            className={`container mx-auto flex flex-col items-center justify-between gap-[1rem] p-[1.5rem] text-center text-6xl xl:flex-row ${shadows.className}`}
          >
            Parallactic Gallery
            <span className="text-2xl">Drag & Drop an Image to Upload!</span>
          </header>
          <div className="container mx-auto">
            <LightBoxProvider>{children}</LightBoxProvider>
          </div>
          <footer
            className={`container mx-auto flex items-center justify-center p-[1.5rem] text-center text-2xl ${shadows.className}`}
          >
            Copyright © 2024 Write-Only Code
          </footer>
        </DropModal>
        <ToastContainer position="top-center" theme="colored" />
      </body>
    </html>
  );
}
