function Task({ onClick, id, todo, progress, onClickCheck }) {
  return (
    <li id={id} className={`todo-item ${progress ? "completed" : ""}`}>
      {todo}
      <button onClick={onClick}> X </button>
      <button onClick={onClickCheck}> V </button>
    </li>
  );
}

export default Task;
