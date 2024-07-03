import { cookies } from "next/headers";
import { defineOneEntry } from "oneentry";
import setRefreshToken from "./actions/setRefreshToken";

const url = process.env.API_URL;

if (!url) {
  throw new Error("API_URL is not defined");
}

const api = defineOneEntry(url, {
  token: process.env.API_TOKEN,
  langCode: "en_US",
  auth: {
    refreshToken: cookies().get("refresh_token")?.value,
    customAuth: false,
    saveFunction: (token) => {
      setRefreshToken(token);
    },
  },
});

export default api;
