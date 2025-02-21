import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { formatErrorMessage } from "@/lib/utils";

interface ErrorServiceProps {
  title: string;
  serviceError: {
    ErrorMessages: string[];
  };
}

export const ErrorService = ({
  title,
  serviceError,
}: Readonly<ErrorServiceProps>) => {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="size-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {formatErrorMessage(serviceError.ErrorMessages)}
      </AlertDescription>
    </Alert>
  );
};
