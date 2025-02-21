"use server";

import { api } from "@/lib/api";

interface RequestChangePassword {
  newPassword: string;
  token: string;
}

export async function ChangePassword({
  newPassword,
  token,
}: RequestChangePassword) {
  return await api
    .put("auth/change-password/", {
      json: {
        newPassword,
        token,
      },
    })
    .json();
}
