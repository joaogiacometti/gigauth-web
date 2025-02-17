"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loginAction } from "./actions";
import { useFormState } from "@/app/hooks/use-form-state";
import { ErrorService } from "@/components/error-service";
import MainBtn from "@/components/main-btn";
import { MainInput } from "@/components/main-input";

export const LoginForm = () => {
  const [{ success, serviceError, validationErrors }, handleSubmit, isPending] =
    useFormState(loginAction);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-center">Login</h1>

      {!success && serviceError && (
        <ErrorService title="Login failed!" serviceError={serviceError} />
      )}

      <MainInput
        name="email"
        type="email"
        id="email"
        label="Email"
        error={validationErrors?.email}
      />

      <MainInput
        name="password"
        type="password"
        id="password"
        label="Password"
        error={validationErrors?.password}
      />

      <Link
        href="/auth/forgot-password"
        className="text-xs font-medium text-foreground hover:underline"
      >
        Forgot your password?
      </Link>

      <MainBtn isLoading={isPending}>Login</MainBtn>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/register">Do not have an account? Register</Link>
      </Button>
    </form>
  );
};
