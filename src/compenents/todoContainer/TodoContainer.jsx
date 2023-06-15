import "./index.css";
import { todolist } from "../../mock/todolist";
import Todolist from "../todolist";
import { useState } from "react";

const TodoContainer = () => {
  const [data, setData] = useState(todolist);
  const [dataDone, setDataDone] = useState(
    todolist.filter((todo) => todo.completed === true)
  );
  const [dataTodo, setDataTodo] = useState(
    todolist.filter((todo) => todo.completed === false)
  );

  return (
    <div className="Todolist">
      <Todolist data={data} columnTitle={"all todos"} />
      <Todolist data={dataDone} columnTitle={"done"} />
      <Todolist data={dataTodo} columnTitle={"todo"} />
    </div>
  );
};
export default TodoContainer;
