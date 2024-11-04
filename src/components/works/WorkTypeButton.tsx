type Props = { type: ButtonType; onClick: () => void; currentType: ButtonType };
type ButtonType = "ALL" | "BS" | "PS";
enum ButtonTexts {
  "ALL" = "All",
  "BS" = "Business",
  "PS" = "Personal",
}

export default function WorkTypeButton({ type, onClick, currentType }: Props) {
  const getButtonClass = (buttonType: ButtonType) =>
    `h-10 md:h-[60px] lg:h-20 flex items-center justify-center px-4 md:px-7 text-sm sm:text-lg md:text-xl font-[700] border transition-all rounded-md lg:rounded-xl ${
      type === buttonType
        ? "border-black bg-black text-white hover:opacity-80"
        : "border-lightGray"
    }`;
  return (
    <button onClick={onClick} className={getButtonClass(currentType)}>
      {ButtonTexts[currentType]}
    </button>
  );
}
