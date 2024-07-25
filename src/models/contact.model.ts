import { EmailData } from "@/interfaces/InEmailer";
import nodeMailer from "nodemailer";

const transport = nodeMailer.createTransport({
  service: "naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: process.env.NAVER_AUTH_USER,
    pass: process.env.NAVER_AUTH_PW,
  },
});
async function SendEmail({ from, subject, message, corp }: EmailData) {
  const mailData = {
    from: `${process.env.NAVER_AUTH_USER}`,
    to: `${process.env.NAVER_AUTH_USER}`,
    subject: `${subject}님으로 부터 [GIVEN-PORTFOLIO CONTACT] `,
    html: `
      <html lang="kr">
          <body>
              <div>
                <h2>보낸사람: ${subject}</h2>
                <p>보낸사람 이메일: ${from}</p>
                <p>보낸 회사: ${corp}</p>
                <div>${message}</div>
              </div>
          </body>
      </html>
      `,
  };
  const data = await transport.sendMail(mailData);
  return data;
}

const ContactModel = { SendEmail };

export default ContactModel;
