const CONTACT_FORM = [
  {
    name: "subject",
    description: "이름을 입력해주세요.",
    placeholder: "ex)홍길동*",
    required: true,
    type: "text",
  },
  {
    name: "from",
    description: "이메일을 입력해주세요.",
    placeholder: "ex)example@gmail.com*",
    required: true,
    type: "email",
  },
  {
    name: "corp",
    description: "회사명을 입력해주세요.",
    placeholder: "ex)활빈당 Corp",
    required: false,
    type: "text",
  },
];

export default CONTACT_FORM;
