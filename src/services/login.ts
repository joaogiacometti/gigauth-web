"use server";

import { api } from "@/lib/api";

interface RequestLogin {
  email: string;
  password: string;
}

interface ResponseLogin {
  token: string;
  refreshToken: string;
}

export async function Login({
  email,
  password,
}: RequestLogin): Promise<ResponseLogin> {
  return await api
    .post("auth/login", {
      json: {
        email,
        password,
      },
    })
    .json();
}
