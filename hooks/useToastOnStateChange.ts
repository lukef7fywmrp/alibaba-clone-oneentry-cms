import { useEffect } from "react";
import { toast } from "sonner";

export function useToastOnStateChange(
  state:
    | {
        message: string;
      }
    | undefined
) {
  useEffect(() => {
    if (state?.message) {
      toast.error(state.message);
    }
  }, [state?.message]);
}
