type Props = {
  text: string;
};
export default function CommonTitle({ text }: Props) {
  return (
    <div className="pb-2 border-b pr-[34px] border-lightGray mb-4">
      <h3 className="text-gray text-sm font-[700]">{text}</h3>
    </div>
  );
}
