import { BaseUrl } from "./baseUrl";
import { NewOrderRequest } from "./types/NewOrderRequest";

export const submitOrder = async (body: NewOrderRequest): Promise<string> => {
  try {
    const response = await fetch(`${BaseUrl}/beans/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log("data", data);
    return data.orderNr;
  } catch (error) {
    console.log("Could not fetch order", error);
    return Promise.reject(error);
  }
};

export const getEta = async (orderNumber: string): Promise<number> => {
  try {
    const response = await fetch(
      `${BaseUrl}/beans/order/status/${orderNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("ordernumberData", data);
    return data.eta;
  } catch (error) {
    console.log("Could not find orderNumber", error);
    return Promise.reject(error);
  }
};
