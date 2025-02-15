import ky from "ky";

export const api = ky.create({
  prefixUrl: "http://localhost:8080/",
});

export const formatErrorMessage = (
  message: string[] | undefined | null
): string => {
  return message?.join(", ") ?? "An error occurred";
};
