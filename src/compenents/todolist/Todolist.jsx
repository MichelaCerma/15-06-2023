import "./index.css";
import Singletodo from "../singleTodo/Singletodo";
import { todolist } from "../../mock/todolist";
import { useState } from "react";

const Todolist = ({ data, columnTitle }) => {
  return (
    <>
      <div className="singleColumn">
        <h3 className="columnTitle">{columnTitle}</h3>
        {data.map((todo) => (
          <Singletodo todo={todo} />
        ))}
      </div>
    </>
  );
};

export default Todolist;
