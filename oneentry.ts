// import { defineOneEntry } from "oneentry";
// import getRefreshToken from "./actions/getRefreshToken";
// import setRefreshToken from "./actions/setRefreshToken";

// const url = process.env.API_URL;

// if (!url) {
//   throw new Error("API_URL is not defined");
// }

// let refreshToken: string | undefined;

// async function initializeOrRefreshToken() {
//   try {
//     const newToken = await getRefreshToken();
//     refreshToken = newToken;
//   } catch (error) {
//     console.error("Failed to refresh token:", error);
//   }
// }

// initializeOrRefreshToken();

// const api = defineOneEntry(url, {
//   token: process.env.API_TOKEN,
//   langCode: "en_US",
//   auth: {
//     refreshToken: refreshToken,
//     customAuth: false,
//     saveFunction: (token) => {
//       setRefreshToken(token);
//     },
//   },
// });

// export default api;

import { defineOneEntry } from "oneentry";
import getRefreshToken from "./actions/getRefreshToken";
import setRefreshToken from "./actions/setRefreshToken";

let apiInstance: ReturnType<typeof defineOneEntry> | null = null;

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
          // Optionally, refresh the API client here if the token changes and it affects the client
        },
      },
    });
  }

  return apiInstance;
}

// Export a function that ensures the API is initialized once and reused
export async function getApiInstance() {
  if (!apiInstance) {
    await initializeApi();
  }
  return apiInstance;
}
