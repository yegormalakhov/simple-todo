import { setState, useState } from "react";
import Header from "./Components/Header";
import Task from "./Components/Task";
import UserInput from "./Components/InputField";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTask] = useState([
    { id: nanoid(), task: "do something", completed: false },
    { id: nanoid(), task: "do something else", completed: false },
    { id: nanoid(), task: "do something more", completed: false },
    { id: nanoid(), task: "don't do anynithing", completed: false },
  ]);

  const [taskBeingEdited, setTaskBeingEdited] = useState();

  const [userInput, setUserInput] = useState([{ task: "" }]);

  const handleUserInput = (event) =>
    setUserInput({ ...userInput, task: event.target.value });

  const handleComplete = (targetTaskId) => {
    setTask(
      tasks.map((task) => {
        if (task.id === targetTaskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleAddNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: nanoid(),
      task: userInput.task,
      completed: false,
    };
    setTask([...tasks, newTask]);
    setUserInput({
      id: "",
      task: "",
      completed: false,
    });
    event.target.reset();
  };

  const handleDelete = (targetTaskId) => {
    const newTasks = sortedTasks(targetTaskId);
    setTask(newTasks);
  };

  function sortedTasks(value) {
    return tasks.filter((task) => task.id != value);
  }

  const handleEdit = (targetTaskId) => {
    setTaskBeingEdited({ ...tasks.find((task) => task.id === targetTaskId) });
  };

  const handleUpdateInput = (event) => {
    setUserInput({ ...userInput, task: event.target.value });
  };

  const handleSaveEdit = (event) => {
    event.preventDefault();
    const updatedTask = {
      ...taskBeingEdited,
      task: userInput.task,
    };

    setTask(
      tasks.map((task) => {
        if (task.id === taskBeingEdited.id) {
          return updatedTask;
        } else {
          return task;
        }
      })
    );
    setTaskBeingEdited();
    setUserInput({
      id: "",
      task: "",
      completed: false,
    });
  };

  return (
    <div className="App">
      <Header />
      {taskBeingEdited ? (
        <>
          <h2>Task edition mode</h2>
          <form onSubmit={handleSaveEdit}>
            <input
              type="text"
              placeholder={taskBeingEdited.task}
              onChange={handleUpdateInput}
            ></input>
            <button className="updateBtn">Save changes</button>
          </form>
        </>
      ) : (
        <>
          <ul>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  todo={task.task}
                  onDelete={handleDelete}
                  onClickCheck={handleComplete}
                  progress={task.completed}
                  onEdit={handleEdit}
                />
              );
            })}
          </ul>
          <UserInput
            onInput={handleUserInput}
            onNewTask={handleAddNewTask}
            userInput={userInput}
          />
        </>
      )}
    </div>
  );
}

export default App;
