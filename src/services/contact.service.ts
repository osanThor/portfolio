import { EmailData } from "@/interfaces/InEmailer";
import client from "@/utils/lib/api/client";
import { isAxiosError } from "axios";

type ContactResponse = {
  result: "SUCCESS";
};

export async function postContact(body: EmailData): Promise<ContactResponse> {
  try {
    const { data } = await client.post<ContactResponse>("/api/contact", body);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const message =
        typeof error.response?.data === "object" &&
        error.response.data &&
        "message" in error.response.data
          ? String(error.response.data.message)
          : "서버 오류가 발생했습니다.";
      throw new Error(message);
    }

    throw error;
  }
}
