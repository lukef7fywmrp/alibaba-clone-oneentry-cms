"use server";

import { cookies } from "next/headers";

export default async function getRefreshToken() {
  return cookies().get("refresh_token")?.value;
}
