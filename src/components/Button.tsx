import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../Redux/CreateStore";

interface IButton {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ text, onClick }) => {
  const isLoading = useSelector((state: RootState) => state.counter.isLoading);

  return (
    <button
      className="px-5 py-3 m-1 mb-4 rounded-2xl bg-[#FFFF3F] text-[#1F1F1F] text-lg font-bold hover:brightness-110 hover:scale-105 transition duration-300 ease-in-out border-4 border-transparent hover:border-white"
      onClick={onClick}
      disabled={isLoading}
    >
      {text}
    </button>
  );
};
