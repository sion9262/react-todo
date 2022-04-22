import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms/atoms";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  }
	return (
		<div>
      <h1>To Dos</h1>
      <hr/>
        <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>TO_DO</option>
          <option value={Categories.DOING}>DOING</option>
          <option value={Categories.DONE}>DONE</option>
        </select>
      </form>
      <ToDoForm/>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))}
      </ul>
    </div>
	)
}
export default ToDoList;
