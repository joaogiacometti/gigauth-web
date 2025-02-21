"use client";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatErrorMessage = (
  message: string[] | undefined | null
): string => {
  return message?.join(", ") ?? "An error occurred";
};
