interface IButton {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <button
      className="px-5 py-3 m-1 mb-4 rounded-2xl bg-[#FFFF3F] text-[#1F1F1F] transition-colors text-lg font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
