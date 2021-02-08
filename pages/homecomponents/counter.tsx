import { atom, useRecoilState } from "recoil";
interface Props {}

const CounterState = atom({
  key: "counterState",
  default: 0,
});

const Todo: React.FC<Props> = () => {
  const [value, setValue] = useRecoilState(CounterState);
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div>
      <h2>Count: {value}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Todo;
