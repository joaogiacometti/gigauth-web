"use server";

import { ResponseAction } from "@/app/types/action";
import { passwordRegex, passwordRegexMessage } from "@/lib/regex";
import { ChangePassword } from "@/services/change-password";
import { HTTPError } from "ky";
import { redirect } from "next/navigation";
import { z } from "zod";

const changePasswordSchema = z.object({
  newPassword: z.string().regex(passwordRegex, passwordRegexMessage),
  token: z.string().min(1, "Token is required"),
});

export async function changePasswordAction(
  data: FormData
): Promise<ResponseAction> {
  const result = changePasswordSchema.safeParse(Object.fromEntries(data));
  if (!result.success)
    return {
      success: false,
      serviceError: null,
      validationErrors: result.error.flatten().fieldErrors,
    };
  const { newPassword, token } = result.data;
  try {
    await ChangePassword({ newPassword, token });
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

  redirect("/auth/login");
}
