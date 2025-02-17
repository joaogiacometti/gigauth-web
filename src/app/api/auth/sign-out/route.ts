import { refreshTokenName, tokenName } from "@/app/constants/tokens";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone();

  redirectUrl.pathname = "/auth/login";

  (await cookies()).delete(tokenName);
  (await cookies()).delete(refreshTokenName);

  return NextResponse.redirect(redirectUrl);
}
