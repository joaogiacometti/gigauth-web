import React from "react";

export const ErrorParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-xs text-red-500 dark:text-red-400">{children}</p>;
};
