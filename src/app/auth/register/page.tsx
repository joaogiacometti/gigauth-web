import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <form className="space-y-4">
      <h1 className="text-center">Register</h1>

      <div className="space-y-1">
        <Label htmlFor="username">User name</Label>
        <Input name="username" id="username" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
        <Input
          name="passwordConfirmation"
          type="passwordConfirmation"
          id="passwordConfirmation"
        />
      </div>

      <Button type="submit" className="w-full">
        Register
      </Button>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/login">Already have an account? Login</Link>
      </Button>
    </form>
  );
}
