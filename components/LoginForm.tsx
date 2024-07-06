"use client";

import { IAttributes } from "oneentry/dist/base/utils";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { buttonVariants } from "./ui/button";
import loginAction from "@/actions/loginAction";
import getInputType from "@/lib/getInputType";

const initialState = {
  message: "",
};

function LoginForm({ formEntity }: { formEntity: IFormsEntity | undefined }) {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-4 w-full -mt-20">
      {formEntity?.attributes.map((attribute: IAttributes) => (
        <div key={attribute.position} className="flex items-center space-x-2">
          <label
            htmlFor={attribute.marker}
            className="block text-xs font-medium text-[#666] w-36 text-right"
          >
            {attribute.localizeInfos?.title}:
          </label>
          <div className="w-full">
            <input
              id={attribute.marker}
              required={attribute.validators?.requiredValidator?.strict}
              type={getInputType(attribute.type, attribute.marker)}
              name={attribute.marker}
              className="authInput"
              placeholder={attribute.localizeInfos?.title}
            />
          </div>
        </div>
      ))}

      <div className=" ml-[120px]">
        {state.message && (
          <p className="text-[#e52828] text-xs mb-4">{state.message}</p>
        )}
        <SubmitButton
          className={buttonVariants({
            className:
              "rounded-none border border-transparent disabled:bg-black/[0.04] disabled:text-black/25 disabled:cursor-not-allowed disabled:border-[#d9d9d9]",
          })}
        >
          Sign in
        </SubmitButton>
      </div>
    </form>
  );
}

export default LoginForm;
