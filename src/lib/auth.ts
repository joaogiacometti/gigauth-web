import { tokenName } from "@/app/constants/tokens";
import { cookies } from "next/headers";

export async function isAuthenticated() {
  return !!(await cookies()).get(tokenName)?.value;
}
