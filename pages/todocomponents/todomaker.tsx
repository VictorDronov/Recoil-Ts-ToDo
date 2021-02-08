import { useState } from "react";
import { RecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./todo";

interface Props {}

const ToDoMaker: React.FC<Props> = () => {
  const [input, setInput] = useState("");
  const setToDoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setToDoList((oldToDoList) => [
      ...oldToDoList,
      {
        id: getId(),
        text: input,
        isComplete: false,
      },
    ]),
      setInput("");
  };

  const onChange = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default ToDoMaker;

let id = 0;
function getId() {
  return id++;
}
