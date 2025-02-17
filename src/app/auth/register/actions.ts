"use server";

import { passwordRegex } from "@/lib/regex";
import { Register } from "@/services/register";
import { HTTPError } from "ky";
import { redirect } from "next/navigation";
import { z } from "zod";

const registerSchema = z
  .object({
    username: z.string().min(8, "Username must be at least 8 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .regex(
        passwordRegex,
        "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number and a special caractere."
      ),
    passwordConfirmation: z
      .string()
      .min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export async function registerAction(data: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(data));

  if (!result.success)
    return {
      success: false,
      serviceError: null,
      validationErrors: result.error.flatten().fieldErrors,
    };

  const { username, email, password, passwordConfirmation } = result.data;

  try {
    await Register({
      username,
      email,
      password,
      passwordConfirmation,
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

  redirect("/auth/login");
}
