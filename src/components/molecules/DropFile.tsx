"use client";

import { imagesUpload } from "@/actions/images";
import { DragEventHandler } from "react";
import { toast } from "react-toastify";

interface DropFileProps {}

export default function DropFile({ ...props }: DropFileProps) {
  const onDropHandler: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    async function upload() {
      const formData = new FormData();

      if (e.dataTransfer) {
        formData.append("path", e.dataTransfer.files[0].name);
        formData.append("file", e.dataTransfer.files[0]);
      }

      const toastId = toast.loading("Uploading image...");

      const { data, error }: { data: any; error: any } = await imagesUpload(undefined, formData);

      if (data) {
        toast.update(toastId, {
          render: "Success!",
          type: "success",
          isLoading: false,
          autoClose: 6000,
        });
      } else {
        toast.update(toastId, {
          render: "Ops, something went wrong: " + error.message + ".",
          type: "error",
          isLoading: false,
          autoClose: 6000,
        });
      }
    }

    upload();
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={(e) => e.stopPropagation()}
      onDrop={onDropHandler}
      className="flex aspect-square flex-col items-center justify-center rounded-full border-[2px] border-dashed border-black bg-white p-[1.5rem]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mb-[1.5rem] h-[3rem] w-[3rem]"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
          clipRule="evenodd"
        />
      </svg>
      <h2 className="mb-[1.5rem] text-center text-4xl">Drop Image Here to Upload!</h2>
      <p className="text-center">As soon as you drop the image, it will be immediatly uploaded to the gallery!</p>
    </div>
  );
}
