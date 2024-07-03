"use server";

import { cookies } from "next/headers";

export default async function setRefreshToken(token: string) {
  return cookies().set("refresh_token", token);
}
