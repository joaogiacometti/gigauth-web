import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" id="email"></Input>
      </div>

      <Button type="submit" className="w-full">
        Send reset link
      </Button>

      <Button className="w-full" variant="link" size="sm">
        <Link href="/auth/login">Go back to login</Link>
      </Button>
    </form>
  );
}
