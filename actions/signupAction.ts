"use server";

import { IErroredResponse } from "@/lib/definitions";
import { getApiInstance } from "@/oneentry";
import { redirect } from "next/navigation";
import { ISignUpData } from "oneentry/dist/auth-provider/authProvidersInterfaces";

export default async function signupAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const apiInstance = await getApiInstance();

  if (!email) {
    return { message: "Please enter your email address" };
  }

  if (!password) {
    return { message: "Set the login password" };
  }

  try {
    const data: ISignUpData = {
      formIdentifier: "signup",
      authData: [
        {
          marker: "email",
          value: email,
        },
        {
          marker: "password",
          value: password,
        },
      ],
      formData: [
        {
          marker: "email",
          value: email,
          type: "string",
        },
        {
          marker: "password",
          value: password,
          type: "string",
        },
      ],
      notificationData: {
        email: email,
        phonePush: "+1234567890", // Dummy phone number
        phoneSMS: "+1234567890", // Dummy phone number
      },
    };

    const formDataRes = await apiInstance?.AuthProvider.signUp("signup", data);

    if (!formDataRes?.id) {
      const error = formDataRes as unknown as IErroredResponse;
      return {
        message: error.message,
      };
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to sign up. Please try again.");
  }

  redirect("/");
}
