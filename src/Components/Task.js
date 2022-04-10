function Task({ onClick, id, todo }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "500px",
      }}
    >
      <p id={id} style={{ display: "block" }}>
        {todo}
      </p>
      <button onClick={onClick}> X </button>
    </div>
  );
}

export default Task;
