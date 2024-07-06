"use server";

import { getApiInstance } from "@/oneentry";
import { cookies } from "next/headers";
import { IOrderData } from "oneentry/dist/orders/ordersInterfaces";

export default async function initiateOrderAndPaymentProcess(
  data: IOrderData
): Promise<string> {
  const apiInstance = await getApiInstance();
  if (!apiInstance) {
    throw new Error("Failed to get API instance.");
  }

  const access_token = cookies().get("access_token")?.value;
  if (!access_token) {
    throw new Error("Access token is missing.");
  }

  try {
    const order = await apiInstance.Orders.setAccessToken(
      access_token
    ).createOrder("orders", data);
    if (!order?.id) {
      throw new Error("Order creation failed.");
    }

    const session = await apiInstance.Payments.setAccessToken(
      access_token
    ).createSession(order.id, "session");
    if (!session?.paymentUrl) {
      throw new Error("Payment session creation failed.");
    }

    return session.paymentUrl;
  } catch (error) {
    console.error("Error in initiateOrderAndPaymentProcess:", error);
    throw new Error(
      `Failed to create order or payment session. ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
