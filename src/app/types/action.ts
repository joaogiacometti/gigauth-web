export interface ResponseAction {
  success: boolean;
  serviceError: { ErrorMessages: string[] } | null;
  validationErrors: Record<string, string[]> | null;
}
