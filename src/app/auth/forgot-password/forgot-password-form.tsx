"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { forgotPasswordAction } from "./actions";
import { useFormState } from "@/app/hooks/use-form-state";
import { ErrorService } from "@/components/error-service";
import { MainInput } from "@/components/main-input";
import MainBtn from "@/components/main-btn";

export const ForgotPasswordForm = () => {
  const [{ success, serviceError, validationErrors }, handleSubmit, isPending] =
    useFormState(forgotPasswordAction);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-center">Recover Password</h1>
      {!success && serviceError && (
        <ErrorService
          title="Recover password failed!"
          serviceError={serviceError}
        />
      )}

      <MainInput
        name="username"
        type="username"
        id="username"
        label="User name"
        error={validationErrors?.username}
      />

      <MainBtn isLoading={isPending}>Send reset link</MainBtn>

      <Button className="w-full" variant="link" size="sm">
        <Link href="/auth/login">Go back to login</Link>
      </Button>
    </form>
  );
};
