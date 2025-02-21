"use server";

import { ResponseAction } from "@/app/types/action";
import { ForgotPassword } from "@/services/forgot-password";
import { HTTPError } from "ky";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

export async function forgotPasswordAction(
  data: FormData
): Promise<ResponseAction> {
  const result = forgotPasswordSchema.safeParse(Object.fromEntries(data));
  if (!result.success)
    return {
      success: false,
      serviceError: null,
      validationErrors: result.error.flatten().fieldErrors,
    };
  const { username } = result.data;
  try {
    await ForgotPassword({ username });
    return { success: true, serviceError: null, validationErrors: null };
  } catch (err) {
    if (err instanceof HTTPError) {
      return {
        success: false,
        serviceError: await err.response.json(),
        validationErrors: null,
      };
    }
    return {
      success: false,
      serviceError: { ErrorMessages: ["Unexpected error"] },
      validationErrors: null,
    };
  }
}
