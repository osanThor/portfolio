type Props = {
  text: string;
};
export default function CommonTitle({ text }: Props) {
  return (
    <div className="pb-2 border-b pr-[34px] border-gray mb-4">
      <h3 className="text-gray text-lg lg:text-2xl font-[700]">{text}</h3>
    </div>
  );
}
