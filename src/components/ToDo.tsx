import { IToDo } from "../atoms/atoms";

const ToDo = ({id, text}: IToDo) => {
	return (
    <li key={id}>{text}</li>
	)
}
export default ToDo;
