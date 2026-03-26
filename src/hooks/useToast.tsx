"use client";
import React from "react";
import toast from "react-hot-toast";
import { SuccessToast, ErrorToast } from "@/components/ui/Toast";

export function useToast() {
  const showSuccess = (message: string) => {
    (toast.custom(<SuccessToast message={message} />),
      {
        duration: 3000,
        position: "bottom-center",
      });
  };

  const showError = (message: string) => {
    toast.custom(
      (t) => (
        <ErrorToast message={message} onClose={() => toast.dismiss(t.id)} />
      ),
      {
        duration: Infinity,
        position: "bottom-center",
      },
    );
  };

  return { showSuccess, showError };
}
