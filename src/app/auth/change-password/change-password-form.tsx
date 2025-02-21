"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useFormState } from "@/app/hooks/use-form-state";
import { ErrorService } from "@/components/error-service";
import { MainInput } from "@/components/main-input";
import MainBtn from "@/components/main-btn";
import { changePasswordAction } from "./actions";

export const ChangePasswordForm = () => {
  const [{ success, serviceError, validationErrors }, handleSubmit, isPending] =
    useFormState(changePasswordAction);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-center">Change Password</h1>
      {!success && serviceError && (
        <ErrorService
          title="Change password failed!"
          serviceError={serviceError}
        />
      )}

      <MainInput
        name="newPassword"
        type="password"
        id="newPassword"
        label="New Password"
        error={validationErrors?.newPassword}
      />

      <MainInput
        name="token"
        id="token"
        label="Token"
        error={validationErrors?.token}
      />

      <MainBtn isLoading={isPending}>Change Password</MainBtn>

      <Button className="w-full" variant="link" size="sm">
        <Link href="/auth/login">Go back to login</Link>
      </Button>
    </form>
  );
};
