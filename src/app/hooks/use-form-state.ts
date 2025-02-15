import { FormEvent, useState, useTransition } from "react";
import { ResponseAction } from "../types/action";

export function useFormState(
  action: (data: FormData) => Promise<ResponseAction>,
  initialState?: ResponseAction
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<ResponseAction>(
    initialState ?? {
      success: false,
      serviceError: null,
      validationErrors: null,
    }
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      setFormState(state);
    });
  }

  return [formState, handleSubmit, isPending] as const;
}
