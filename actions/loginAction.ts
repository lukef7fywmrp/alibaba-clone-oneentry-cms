"use server";

import { IErroredResponse } from "@/lib/definitions";
import { redirect } from "next/navigation";
import { IAuthPostBody } from "oneentry/dist/auth-provider/authProvidersInterfaces";
import { cookies } from "next/headers";
import { getApiInstance } from "@/oneentry";

export default async function loginAction(prevState: any, formData: FormData) {
  const account = formData.get("account") as string;
  const password = formData.get("password") as string;
  const apiInstance = await getApiInstance();

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

    const authRes = await apiInstance?.AuthProvider.auth("signup", data);

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
  } catch (error: any) {
    console.error(error);
    if (error?.statusCode === 401) {
      return { message: error?.message };
    }

    throw new Error("Failed to login. Please try again.");
  }

  redirect("/");
}
