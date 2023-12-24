import { useSelector, useDispatch } from "react-redux"; // Используйте useDispatch напрямую
import { Value } from "./components/Value";
import { Button } from "./components/Button";
import { AppDispatch, RootState } from "./Redux/CreateStore";
import {
  decrementAsync,
  decrementByValueAsync,
  incrementAsync,
  incrementByValueAsync,
} from "./Redux/Counter/CounterActions";
import { setInput } from "./Redux/Counter/CounterSlice";

export default function App() {
  const { value: curr, input } = useSelector(
    (state: RootState) => state.counter
  );

  const dispatch: AppDispatch = useDispatch();
  const increment = () => dispatch(incrementAsync());
  const decrement = () => dispatch(decrementAsync());
  const incrementByValue = () =>
    dispatch(incrementByValueAsync({ value: curr, input }));
  const decrementByValue = () =>
    dispatch(decrementByValueAsync({ value: curr, input }));
  const setInputValue = (value: any) => dispatch(setInput(value));

  return (
    <div className="App">
      <h4 className="text-5xl my-4 text-red-500">Счетчик</h4>
      <Value />
      <div>
        <Button text="Увеличить" onClick={increment} />
        <Button text="Уменьшить" onClick={decrement} />
      </div>
      <div>
        <input
          className="outline-0 text-[#0D0C22] transition-colors text-base rounded-3xl py-2.5 px-12 mb-4 border-4 border-gray-300 bg-gray-100 hover:border-[#B0B8C1]"
          placeholder="Изменить на значение..."
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
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
    </div>
  );
}
