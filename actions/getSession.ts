"use server";

import { getApiInstance } from "@/oneentry";
import { cookies } from "next/headers";

interface IErroredResponse {
  statusCode: number;
  timestamp: string;
  message: string;
  pageData: null;
}

export default async function getSession() {
  const apiInstance = await getApiInstance();

  try {
    const access_token = cookies().get("access_token")?.value;

    if (!access_token) {
      return null;
    }
    const user = await apiInstance?.Users.setAccessToken(
      access_token
    ).getUser();

    if (!user?.id) {
      const error = user as unknown as IErroredResponse;
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get session. Please try again.");
  }
}
