"use client";

import { ToastContainer } from "react-toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {

  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        delay={3000}
      />
    </>
  );
}