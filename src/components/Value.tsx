import { useSelector } from "react-redux";
import { getValue } from "../Redux/Counter/CounterSlice";

export const Value = () => {
  const value = useSelector(getValue);
  console.log(value);
  return (
    <div className="text-[#8B8B89] text-xl mb-3 underline font-semibold">
      Значение: {value}
    </div>
  );
};
