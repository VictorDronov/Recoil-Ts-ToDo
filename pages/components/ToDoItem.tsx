import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./todo";

interface Props {
  item: any;
}

const ToDoItem: React.FC<Props> = ({ item }) => {
  const [todoList, setToDoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);
  const [show, setShow] = useState(true);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setToDoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setToDoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setToDoList(newList);
  };

  return (
    <div>
      <h4>{item.text}</h4>
      <button onClick={() => setShow(!show)}>Edit</button>
      <div>
        {show ? (
          <div></div>
        ) : (
          <div>
            <input type="text" onChange={editItemText} />
          </div>
        )}
      </div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default ToDoItem;

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
