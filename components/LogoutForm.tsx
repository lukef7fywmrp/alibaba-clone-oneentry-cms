"use client";

import logoutAction from "@/actions/logoutAction";
import { useToastOnStateChange } from "@/hooks/useToastOnStateChange";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";

const initialState = {
  message: "",
};

function LogoutForm() {
  const [state, formAction] = useFormState(logoutAction, initialState);

  useToastOnStateChange(state);

  return (
    <form action={formAction} className="mt-2 mb-3">
      <SubmitButton className="headerDropdownLink text-left">
        Log out
      </SubmitButton>
    </form>
  );
}

export default LogoutForm;
