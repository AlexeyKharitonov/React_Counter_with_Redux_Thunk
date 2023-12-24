import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/CreateStore";
import {
  decrementAsync,
  decrementByValueAsync,
  incrementAsync,
  incrementByValueAsync,
} from "../Redux/Counter/CounterActions";
import { setInput } from "../Redux/Counter/CounterSlice";
import { Button } from "./Button";

export const CounterControl = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const { value: curr, input } = useSelector(
    (state: RootState) => state.counter
  );

  const increment = () => dispatch(incrementAsync());
  const decrement = () => dispatch(decrementAsync());

  const incrementByValue = () => {
    dispatch(incrementByValueAsync({ value: curr, input }));
    setInputValue("");
  };

  const decrementByValue = () => {
    dispatch(decrementByValueAsync({ value: curr, input }));
    setInputValue("");
  };

  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
    const numValue = parseInt(value, 10) || 0;
    dispatch(setInput(numValue));
  };
  return (
    <>
      <div>
        <Button text="Увеличить" onClick={increment} />
        <Button text="Уменьшить" onClick={decrement} />
      </div>
      <div>
        <input
          className="outline-0 text-[#0D0C22] transition-colors text-base rounded-3xl py-2.5 px-12 mb-4 border-4 border-gray-300 bg-gray-100 hover:border-[#B0B8C1]"
          placeholder="Изменить на значение..."
          onChange={handleInputChange}
          value={inputValue}
        />
        <div>
          <Button
            text="Увеличить на значение"
            onClick={() => {
              incrementByValue();
            }}
          />
          <Button
            text="Уменьшить на значение"
            onClick={() => {
              decrementByValue();
            }}
          />
        </div>
      </div>
    </>
  );
};
