"use client";

import Magnetic from "@/components/common/Magnetic";
import SendIcon from "@/components/ui/icons/SendIcon";
import { toast } from "@/components/ui/use-toast";
import CONTACT_FORM from "@/data/contact/contactForm";
import { EmailData } from "@/interfaces/InEmailer";
import { postContact } from "@/services/contact.service";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const EMAIL_PATTERN =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const EMPTY_FORM: EmailData = {
  subject: "",
  from: "",
  corp: "",
  message: "",
};

export default function ContactFormContainer() {
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState<EmailData>(EMPTY_FORM);

  function handleChangeFields(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;

    if (name === "message" && value) {
      const lineCount = (value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
      if (lineCount > 10) {
        alert("최대 10줄까지만 입력가능합니다.");
        return;
      }
    }

    setBody((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!EMAIL_PATTERN.test(body.from)) {
      toast({
        title: "이메일 형식이 아닙니다.",
        description: "다시 확인해주세요.",
        variant: "destructive",
      });
      return;
    }

    void handlePostEmail(body);
  }

  async function handlePostEmail(formData: EmailData) {
    try {
      setLoading(true);
      const result = await postContact(formData);

      if (result.result === "SUCCESS") {
        toast({
          title: "전송이 완료되었습니다.",
          description: "연락주셔서 감사합니다.",
        });
        setBody(EMPTY_FORM);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "서버 오류가 발생했습니다.";
      toast({
        title: "전송에 실패했습니다.",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10 py-10">
      {CONTACT_FORM.map((form, idx) => {
        const target = body[form.name as keyof typeof body];

        return (
          <label
            key={`contact-form-${form.name}`}
            className="w-full flex flex-col"
          >
            <legend
              className={`relative ${
                target !== "" ? "text-lightGray" : "text-white"
              } text-xl transition-all`}
            >
              <span className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-7 text-xs text-gray">
                0{idx + 1}
              </span>
              {form.description}
            </legend>
            <input
              onChange={handleChangeFields}
              name={form.name}
              type={form.type}
              value={target || ""}
              required={form.required}
              placeholder={form.placeholder}
              className="w-full h-20 border-b text-white text-3xl transition-all placeholder:text-gray truncate placeholder:truncate placeholder:text-xl border-gray focus:outline-none focus:border-blue bg-darkIndigo"
              autoFocus={idx === 0}
              disabled={loading}
            />
          </label>
        );
      })}
      <label className="w-full flex flex-col">
        <legend className="relative text-white text-xl">
          <span className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-7 text-xs text-gray">
            0{CONTACT_FORM.length + 1}
          </span>
          메세지를 입력해주세요.
        </legend>
        <ReactTextareaAutosize
          required
          placeholder="ex)안녕하세요. 활빈당입니다.*"
          onChange={handleChangeFields}
          maxRows={7}
          className="w-full min-h-[80px] py-5 h-20 border-b resize-none text-white text-3xl truncate placeholder:text-gray placeholder:truncate placeholder:text-xl border-gray focus:outline-none focus:border-blue bg-darkIndigo"
          value={body.message}
          name="message"
          disabled={loading}
        />
      </label>
      <div className="w-full flex items-center justify-end">
        <Magnetic>
          <button
            type="submit"
            disabled={loading}
            className="relative border group border-gray lg:text-2xl px-5 py-4 flex items-center gap-4 text-gray before:top-0 before:left-0 fill-gray before:w-0 before:absolute before:h-full before:transition-all hover:before:w-full before:bg-gray hover:text-white hover:fill-white"
          >
            <span className="relative">보내기</span>
            <span className="relative">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <SendIcon />
              )}
            </span>
          </button>
        </Magnetic>
      </div>
    </form>
  );
}
