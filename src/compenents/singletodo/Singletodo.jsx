import "./index.css";

const Singletodo = ({ todo }) => {
  return (
    <div className={`singleTodo ${todo.completed} `}>
      <p className="todo_title">{todo.title}</p>
      <input
        type="checkbox"
        className="todo_checkbox"
        name="checkbox"
        checked={todo.completed}
      />
    </div>
  );
};
export default Singletodo;
