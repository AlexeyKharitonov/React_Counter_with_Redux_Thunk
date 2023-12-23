import { useDispatch, useSelector } from "react-redux";
import { Value } from "./components/Value";
import { Button } from "./components/Button";
import {
  incrementAsync,
  decrementAsync,
  incrementByValueAsync,
  decrementByValueAsync,
  setInput,
} from "./ducks/actions";

import "./styles.css";

export default function App() {
  const { input, value: curr } = useSelector((state: any) => state);

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementAsync());
  const decrement = () => dispatch(decrementAsync());
  const incrementByValue = () => dispatch(incrementByValueAsync(curr, input));
  const decrementByValue = () => dispatch(decrementByValueAsync(curr, input));
  const setInputValue = (value: any) => dispatch(setInput(value));

  return (
    <div className="App">
      <Value />
      <div style={{ marginBottom: 16 }}>
        <Button text="Увеличить" onClick={increment} />
        <Button text="Уменьшить" onClick={decrement} />
      </div>
      <div>
        <input
          placeholder="изменить на значение"
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
