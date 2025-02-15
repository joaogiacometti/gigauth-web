"use server";

import { refreshTokenName, tokenName } from "@/app/constants/tokens";
import { ResponseAction } from "@/app/types/action";
import { Login } from "@/services/signIn";
import { HTTPError } from "ky";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function loginAction(data: FormData): Promise<ResponseAction> {
  const rawData = Object.fromEntries(data);
  const result = loginSchema.safeParse(rawData);

  if (!result.success)
    return {
      success: false,
      serviceError: null,
      validationErrors: result.error.flatten().fieldErrors,
    };

  const { email, password } = result.data;

  try {
    const { token, refreshToken } = await Login({
      email: String(email),
      password: String(password),
    });

    (await cookies()).set(tokenName, token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    (await cookies()).set(refreshTokenName, refreshToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  } catch (err) {
    if (err instanceof HTTPError)
      return {
        success: false,
        serviceError: await err.response.json(),
        validationErrors: null,
      };

    return {
      success: false,
      serviceError: { ErrorMessages: ["Unexpected error"] },
      validationErrors: null,
    };
  }

  redirect("/");
}
