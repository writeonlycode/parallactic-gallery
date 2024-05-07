"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface DropModalProps {
  children: Readonly<React.ReactNode>;
  render: Readonly<React.ReactNode>;
  className?: string;
}

export default function DropModal({ children, render, className, ...props }: DropModalProps) {
  const [dragOver, setDragOver] = useState(false);
  const [dragStart, setDragStart] = useState(false);

  return (
    <div
      onDragStart={(e) => {
        setDragStart(true);
      }}
      onDragEnd={(e) => {
        setDragStart(false);
        setDragOver(false);
      }}
      onDragEnter={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
      }}
    >
      {children}
      {dragOver && !dragStart && (
        <div
          onDragEnter={(e) => {
            e.preventDefault();
          }}
          onDragOver={(e) => {
            setDragOver(true);
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragOver(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
          }}
          className={cn("fixed inset-0 flex items-center justify-center bg-black/50", className)}
        >
          {render}
        </div>
      )}
    </div>
  );
}
