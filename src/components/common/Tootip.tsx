type Props = {
  text: string;
};
export default function Tootip({ text }: Props) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-1 hidden group-hover:flex items-center font-[700] text-sm justify-center bg-white py-1 px-2 shadow-md rounded whitespace-nowrap">
      {text}
    </div>
  );
}
