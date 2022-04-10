const UserInput = ({ onInput, onNewTask, userInput }) => {
  const { task } = userInput;
  return (
    <form onSubmit={onNewTask}>
      <input
        type="text"
        placeholder="Your new task"
        value={task}
        name="task"
        onChange={onInput}
      />
      <button>Add</button>
    </form>
  );
};

export default UserInput;
