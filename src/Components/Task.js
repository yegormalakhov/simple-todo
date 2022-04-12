function Task({ onClick, id, todo }) {
  return (
    <li id={id}>
      {todo}
      <button onClick={onClick}> X </button>
    </li>
  );
}

export default Task;
