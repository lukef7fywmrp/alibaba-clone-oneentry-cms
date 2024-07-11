import { useEffect } from "react";
import { ExternalToast, toast } from "sonner";

export function useToastOnStateChange(
  state:
    | {
        message?: string;
        success?: boolean;
        data?: ExternalToast;
      }
    | undefined
) {
  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message, state.data);
      } else {
        toast.error(state.message, state.data);
      }
    }
  }, [state?.message, state?.success, state?.data]);
}
