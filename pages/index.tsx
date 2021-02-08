import { RecoilRoot } from "recoil";
import CharCounter from "./components/characterCounter";
import Todo from "./components/todo";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <RecoilRoot>
      <Counter />
      <CharCounter />
      <Todo />
    </RecoilRoot>
  );
}
