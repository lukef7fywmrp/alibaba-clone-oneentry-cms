"use server";

import { getApiInstance } from "@/oneentry";
import { cookies } from "next/headers";

interface IErroredResponse {
  statusCode: number;
  timestamp: string;
  message: string;
  pageData: null;
}

export default async function logoutAction(prevState: any, formData: FormData) {
  const refreshToken = cookies().get("refresh_token")?.value;
  const accessToken = cookies().get("access_token")?.value;
  const apiInstance = await getApiInstance();

  if (!refreshToken || !accessToken) {
    return {
      message: "You are not logged in.",
    };
  }

  try {
    const logoutRes = await apiInstance?.AuthProvider.setAccessToken(
      accessToken
    ).logout("signup", refreshToken);

    if (typeof logoutRes !== "boolean") {
      const error = logoutRes as unknown as IErroredResponse;
      return {
        message: error.message,
      };
    }

    cookies().delete("refresh_token");
    cookies().delete("access_token");
    cookies().delete("user_identifier");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to logout. Please try again.");
  }
}
