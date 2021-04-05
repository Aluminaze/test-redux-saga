import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncIncrementAC } from "./redux/actions";

function App() {
  const count = useSelector((state) => state.countReducer.count);
  const dispath = useDispatch();
  console.log("~ count", count);

  return (
    <div className="App">
      <span>Count: {count}</span>

      <button onClick={() => dispath(asyncIncrementAC())}>INCREMENT</button>
    </div>
  );
}

export default App;
