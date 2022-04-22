import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms/atoms";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
	return (
		<div>
      <h1>To Dos</h1>
      <hr/>
      <ToDoForm/>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))}
      </ul>
    </div>
	)
}
export default ToDoList;
