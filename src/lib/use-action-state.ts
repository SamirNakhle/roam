import { useEffect, useState } from "react";
import { useFormState as useFormStateReact } from "react-dom";

export function useActionState<S, P>(
  action: (state: Awaited<S>, payload: P) => S,
  initialState: Awaited<S>,
  permalink?: string,
): [Awaited<S>, (payload: P) => void, boolean] {
  const [state, formActionBase] = useFormStateReact<S, P>(
    action,
    initialState,
    permalink,
  );
  const [pending, setPending] = useState(false);

  const formAction = (payload: P) => {
    if (pending) return;

    setPending(true);
    formActionBase(payload);
  };

  useEffect(() => {
    setPending(false);
  }, [state]);

  return [state, formAction, pending];
}
