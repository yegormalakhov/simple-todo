// import "./styles.css";
// import { Button, Card, Form } from "react-bootstrap";
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

  //function to remove task from the tasks array by filtering out task with an id that match the id of targeted p tag
  const handleDelete = (targetTaskId) => {
    // const targetTask = event.target.parentElement.id;
    const newTasks = sortedTasks(targetTaskId);
    setTask(newTasks);
  };

  const handleEdit = (targetTaskId) => {
    setTaskBeingEdited({ ...tasks.find((task) => task.id === targetTaskId) });
  };

  function sortedTasks(value) {
    return tasks.filter((task) => task.id != value);
  }

  // Listen to the onChange event on the input and capture whatever the user is typing
  // Add a button "Save changes"
  // On this button, add an event listener onClick that will fire handleSaveEdit
  // in handleSaveEdit:
  // ==> filter out the task that you are editing from the tasks state
  // ==> inject into the tasks state the task you modified
  // ==> reset the taskBeingEdited state to undefined
 
  return (
    <div className="App">
      <Header />
      {taskBeingEdited ? (
        <>
          <h2>Task edition mode</h2>
          <input type="text" placeholder={taskBeingEdited.task}></input>
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
                  onDelete={handleDelete} //to  react on remove button
                  onClickCheck={handleComplete} //to do on click check btn
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
