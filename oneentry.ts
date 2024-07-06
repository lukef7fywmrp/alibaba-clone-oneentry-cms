import { defineOneEntry } from "oneentry";
import getRefreshToken from "./actions/getRefreshToken";
import setRefreshToken from "./actions/setRefreshToken";

export type ApiInstanceType = ReturnType<typeof defineOneEntry> | null;

let apiInstance: ApiInstanceType = null;

async function initializeApi(): Promise<ReturnType<typeof defineOneEntry>> {
  const url = process.env.API_URL;

  if (!url) {
    throw new Error("API_URL is not defined");
  }

  if (!apiInstance) {
    let refreshToken: string | undefined = await getRefreshToken().catch(
      (error) => {
        console.error("Failed to get initial refresh token:", error);
        return undefined;
      }
    );

    apiInstance = defineOneEntry(url, {
      token: process.env.API_TOKEN,
      langCode: "en_US",
      auth: {
        refreshToken: refreshToken,
        customAuth: false,
        saveFunction: async (token: string) => {
          await setRefreshToken(token);
        },
      },
    });
  }

  return apiInstance;
}

export async function getApiInstance() {
  if (!apiInstance) {
    await initializeApi();
  }
  return apiInstance;
}
