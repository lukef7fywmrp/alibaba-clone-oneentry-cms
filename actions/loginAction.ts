"use server";

import { IErroredResponse } from "@/lib/definitions";
import api from "@/oneentry";
import { redirect } from "next/navigation";
import { IAuthPostBody } from "oneentry/dist/auth-provider/authProvidersInterfaces";
import { cookies } from "next/headers";

export default async function loginAction(prevState: any, formData: FormData) {
  const account = formData.get("account") as string;
  const password = formData.get("password") as string;

  if (!account) {
    return { message: "Please enter your email address" };
  }

  if (!password) {
    return { message: "Set the login password" };
  }

  try {
    const data: IAuthPostBody = {
      authData: [
        {
          marker: "email",
          value: account,
        },
        {
          marker: "password",
          value: password,
        },
      ],
    };

    const authRes = await api.AuthProvider.auth("signup", data);

    if (!authRes?.userIdentifier) {
      const error = authRes as unknown as IErroredResponse;
      return {
        message: error.message,
      };
    }

    cookies().set("access_token", authRes.accessToken, {
      maxAge: 60 * 60 * 24, // 24 hours
    });

    cookies().set("refresh_token", authRes.refreshToken, {
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    cookies().set("user_identifier", authRes.userIdentifier);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login. Please try again.");
  }

  redirect("/");
}
