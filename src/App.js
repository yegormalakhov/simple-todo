// import "./styles.css";
// import { Button, Card, Form } from "react-bootstrap";
import { setState, useState } from "react";
import Header from "./Components/Header";
import Task from "./Components/Task";
import UserInput from "./Components/InputField";
import "./App.css";

function App() {
  const [tasks, setTask] = useState([
    { id: 0, task: "do something" },
    { id: 1, task: "do something else" },
    { id: 2, task: "do something more" },
    { id: 3, task: "don't do anynithing" },
  ]);

  const [userInput, setUserInput] = useState([{ task: "" }]);

  const handleUserInput = (event) => {
    setUserInput({ ...userInput, task: event.target.value });
    console.log(userInput); //first entry is not recognized
  };

  const handleAddNewTask = (event) => {
    event.preventDefault();
    // console.log("submitting the form");
    const newTask = {
      id: tasks.length + 1,
      task: userInput.task,
    };
    // console.log(tasks);
    setTask([...tasks, newTask]);
    setUserInput({
      id: "",
      task: "",
    });
    event.target.reset();
  };

  return (
    <div className="App">
      <Header />
      <div>
        {tasks.map((task) => {
          return <Task key={task.id} id={task.id} todo={task.task} />;
        })}
      </div>

      <UserInput
        onInput={handleUserInput}
        onNewTask={handleAddNewTask}
        userInput={userInput}
      />
    </div>
  );
}

export default App;
