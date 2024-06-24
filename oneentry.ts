import { defineOneEntry } from "oneentry";

const url = process.env.API_URL;

if (!url) {
  throw new Error("API_URL is not defined");
}

const getAPI = (refreshToken?: string | undefined) =>
  defineOneEntry(url, {
    token: process.env.API_TOKEN,
    langCode: "en_US",
    auth: {
      refreshToken,
    },
  });

export default getAPI;
