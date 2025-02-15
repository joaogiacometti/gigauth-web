"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginAction } from "./actions";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Loader2 } from "lucide-react";
import { ErrorParagraph } from "@/components/error-paragraph";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { formatErrorMessage } from "@/lib/api";
import { useFormState } from "@/app/hooks/use-form-state";

export const LoginForm = () => {
  const [{ success, serviceError, validationErrors }, handleSubmit, isPending] =
    useFormState(loginAction);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-center">Register</h1>

      {!success && serviceError && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Login failed!</AlertTitle>
          <AlertDescription>
            {formatErrorMessage(serviceError.ErrorMessages)}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" id="email" />
        {validationErrors?.email && (
          <ErrorParagraph>{validationErrors.email}</ErrorParagraph>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />

        {validationErrors?.password && (
          <ErrorParagraph>{validationErrors.password}</ErrorParagraph>
        )}

        <Link
          href="/auth/forgot-password"
          className="text-xs font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? <Loader2 className="size-4 animate-spin" /> : "Login"}
      </Button>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/register">Do not have an account? Register</Link>
      </Button>
    </form>
  );
};
