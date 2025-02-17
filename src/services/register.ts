"use server";

import { api } from "@/lib/api";

interface RequestRegister {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function Register({
  username,
  email,
  password,
  passwordConfirmation,
}: RequestRegister): Promise<void> {
  return await api
    .post("auth/register", {
      json: {
        username,
        email,
        password,
        passwordConfirmation,
      },
    })
    .json();
}
