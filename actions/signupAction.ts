"use server";

import { getApiInstance } from "@/oneentry";
import { ISignUpData } from "oneentry/dist/auth-provider/authProvidersInterfaces";

export default async function signupAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullname") as string;
  const apiInstance = await getApiInstance();

  if (!email) {
    return { message: "Please enter your email address" };
  }

  if (!password) {
    return { message: "Set the login password" };
  }

  if (!fullName) {
    return { message: "Please enter your full name" };
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
        {
          marker: "fullname",
          value: fullName,
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
        {
          marker: "fullname",
          value: fullName,
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

    return formDataRes;
  } catch (error: any) {
    console.error(error);
    if (error?.statusCode === 400) {
      return { message: error?.message };
    }

    throw new Error("Failed to signup. Please try again.");
  }
}
