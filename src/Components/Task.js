function Task({ onClick, id, todo, progress, onClickCheck }) {
  return (
    <li id={id} className={`todo-item ${progress ? "completed" : ""}`}>
      {todo}

      <button className="deleteBtn" onClick={onClick}>
        <i class="fa-solid fa-trash-can" ></i>
      </button>
      <button className="checkBtn" onClick={onClickCheck}>
        <i class="fa-solid fa-circle-check" ></i>
      </button>
    </li>
  );
}

export default Task;
