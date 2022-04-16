function Task({ onDelete, id, todo, progress, onClickCheck, onEdit }) {
  return (
    <li className={`todo-item ${progress ? "completed" : ""}`}>
      {todo}

      <div>
        <button className="deleteBtn" onClick={() => onDelete(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="checkBtn" onClick={() => onClickCheck(id)}>
          <i className="fa-solid fa-circle-check"></i>
        </button>
        <button className="editBtn" onClick={() => onEdit(id)}>
          <i className="fa-solid fa-marker"></i>
        </button>
      </div>
    </li>
  );
}

export default Task;
