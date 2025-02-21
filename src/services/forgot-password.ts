"use server";

import { api } from "@/lib/api";

interface RequestForgotPassword {
  username: string;
}

export async function ForgotPassword({ username }: RequestForgotPassword) {
  return await api.post(`auth/forgot-password/${username}`).json();
}
