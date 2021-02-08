import { atom, useRecoilState, useRecoilValue } from "recoil";
import ToDoMaker from "./todomaker";
import ToDoItem from "./ToDoItem";

 export const todoListState = atom({
  key: "todoListState",
  default: [],
});

const Todo: React.FC<{}> = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <ToDoMaker />
      {todoList.map((todoItem) => (
        <ToDoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default Todo;
