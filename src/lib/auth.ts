import { tokenName } from "@/app/constants/tokens";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ResponseAuth {
  username: string;
  email: string;
}

interface GigAuthJwt extends JwtPayload {
  name: string;
  email: string;
}

export async function isAuthenticated() {
  return !!(await getToken());
}

export async function auth(): Promise<ResponseAuth> {
  const token = await getToken();

  if (!token) redirect("/auth/login");

  const tokenDecoded = jwtDecode<GigAuthJwt>(token);

  return {
    username: tokenDecoded.name,
    email: tokenDecoded.email,
  };
}

async function getToken() {
  return (await cookies()).get(tokenName)?.value;
}
