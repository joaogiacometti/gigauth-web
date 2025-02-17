"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { registerAction } from "./actions";
import { useFormState } from "@/app/hooks/use-form-state";
import { ErrorService } from "@/components/error-service";
import MainBtn from "@/components/main-btn";
import { MainInput } from "@/components/main-input";

export const RegisterForm = () => {
  const [{ success, serviceError, validationErrors }, handleSubmit, isPending] =
    useFormState(registerAction);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-center">Register</h1>

      {!success && serviceError && (
        <ErrorService title="Register failed!" serviceError={serviceError} />
      )}

      <MainInput
        name="username"
        id="username"
        label="User name"
        error={validationErrors?.username}
      />

      <MainInput
        name="email"
        id="email"
        label="Email"
        error={validationErrors?.email}
      />

      <MainInput
        name="password"
        id="password"
        label="Password"
        type="password"
        error={validationErrors?.password}
      />

      <MainInput
        name="passwordConfirmation"
        id="passwordConfirmation"
        label="Password Confirmation"
        type="password"
        error={validationErrors?.passwordConfirmation}
      />

      <MainBtn isLoading={isPending}>Register</MainBtn>

      <Button className="w-full" variant="link" size="sm" asChild>
        <Link href="/auth/login">Already have an account? Login</Link>
      </Button>
    </form>
  );
};
