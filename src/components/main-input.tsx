import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ErrorValidation } from "./error-validation";

interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string[] | null;
}

export const MainInput = ({ id, label, error, ...props }: MainInputProps) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
      {error && <ErrorValidation>{error}</ErrorValidation>}
    </div>
  );
};
