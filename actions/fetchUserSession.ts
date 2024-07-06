"use server";

import { getApiInstance } from "@/oneentry";
import { cookies } from "next/headers";

export default async function fetchUserSession() {
  const apiInstance = await getApiInstance();
  const access_token = cookies().get("access_token")?.value;
  if (!access_token) return null;

  try {
    const user = await apiInstance?.Users.setAccessToken(
      access_token
    ).getUser();
    if (!user || !user.id) {
      throw new Error("User data is invalid or missing ID.");
    }

    return user;
  } catch (error) {
    console.error("Error fetching user session:", error);
    throw new Error(
      `Error fetching user session: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
