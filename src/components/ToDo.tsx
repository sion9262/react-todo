import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms/atoms";

const ToDo = ({id, text, category}: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: {name} } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex(toDos => toDos.id === id);
      console.log(targetIndex);
      const newToDo = {text, id, category: name as any};
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)]
    });
  }
	return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && <button name="DOING" onClick={onClick}>DOING</button>}
      {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
      {category !== "DONE" && <button name="DONE" onClick={onClick} >DONE</button>}
    </li>
	)
}
export default ToDo;
