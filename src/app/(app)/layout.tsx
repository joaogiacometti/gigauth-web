import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!(await isAuthenticated())) {
    redirect("/auth/login");
  }
  return <>{children}</>;
}
