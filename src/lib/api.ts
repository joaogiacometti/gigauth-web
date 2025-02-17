"use server";

import ky from "ky";
import { env } from "@/env";

export const api = ky.create({
  prefixUrl: env.API_URL,
});

export const formatErrorMessage = async (
  message: string[] | undefined | null
): Promise<string> => {
  return message?.join(", ") ?? "An error occurred";
};
