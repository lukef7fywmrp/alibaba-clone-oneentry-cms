"use server";

import { getApiInstance } from "@/oneentry";
import { cookies } from "next/headers";
import { IOrderData } from "oneentry/dist/orders/ordersInterfaces";

export default async function createOrderAction(data: IOrderData) {
  const apiInstance = await getApiInstance();
  const access_token = cookies().get("access_token")?.value;

  if (!access_token) {
    return null;
  }

  try {
    return apiInstance?.Orders.setAccessToken(access_token).createOrder(
      "orders",
      data
    );
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create order. Please try again.");
  }
}
