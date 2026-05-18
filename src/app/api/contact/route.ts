import BadReqError from "@/controllers/error/bad_req_error";
import CustomServerError from "@/controllers/error/custom_server_error";
import ContactModel from "@/models/contact.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from, subject, message } = body;

    if (!from || !subject || !message) {
      throw new BadReqError("이메일 form 누락");
    }

    await ContactModel.SendEmail({ from, subject, message });
    return NextResponse.json({ result: "SUCCESS" });
  } catch (err) {
    console.error("CONTACT ERROR", err);

    if (err instanceof CustomServerError) {
      return NextResponse.json(err.serializeErrors(), {
        status: err.statusCode,
      });
    }

    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
