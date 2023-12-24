import { useSelector } from "react-redux";
import { RootState } from "./Redux/CreateStore";
import { CounterDisplay } from "./Components/CounterDisplay";
import { CounterControl } from "./Components/CounterControl";
import { Loader } from "./Components/Loader";

export default function App() {
  const isLoading = useSelector((state: RootState) => state.counter.isLoading);

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-transparent">
            <Loader />
          </div>
        </div>
      )}
      <CounterDisplay />
      <CounterControl />
    </div>
  );
}
