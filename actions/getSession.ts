"use server";

import api from "@/oneentry";
import { cookies } from "next/headers";
import { IUserEntity } from "oneentry/dist/users/usersInterfaces";

interface IErroredResponse {
  statusCode: number;
  timestamp: string;
  message: string;
  pageData: null;
}

// export default async function getSession() {
//   try {
//     const user = await api.Users.getUser("en_US");

//     console.log("user", user);

//     if (!user?.id) {
//       const error = user as unknown as IErroredResponse;
//       return null;
//     }

//     return user;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to get session. Please try again.");
//   }
// }

// https://alibaba.oneentry.cloud/api/content/users/me
export default async function getSession() {
  try {
    const access_token = cookies().get("access_token")?.value;
    const res = await fetch(`${process.env.API_URL}/api/content/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "x-app-token": `${process.env.API_TOKEN}`,
      },
    });
    const user: IUserEntity = await res.json();

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
