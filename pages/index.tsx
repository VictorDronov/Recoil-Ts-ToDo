import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CharCounter from "./components/characterCounter";
import Todo from "./components/Counter";

export default function Home() {
  return (
    <RecoilRoot>
      <Todo />
      <CharCounter />
    </RecoilRoot>
  );
}
