// import "./styles.css";
// import { Button, Card, Form } from "react-bootstrap";
import { setState, useState } from "react";
import Header from "./Components/Header";
import Task from "./Components/Task";
import UserInput from "./Components/InputField";
import "./App.css";

function App() {
  const [tasks, setTask] = useState([
    { id: 0, task: "do something", completed: false },
    { id: 1, task: "do something else", completed: false },
    { id: 2, task: "do something more", completed: false },
    { id: 3, task: "don't do anynithing", completed: false },
  ]);

  let [taskId, setTaskId] = useState(3);

  const [userInput, setUserInput] = useState([{ task: "" }]);

  const handleUserInput = (event) =>
    setUserInput({ ...userInput, task: event.target.value });

  const handleComplete = (event) => {
    const targetTask = +event.target.parentElement.id;
    // console.log(typeof targetTask);
    setTask(
      tasks.map((task) => {
        //checks if the task has the same id as click target then it change completed to oposite.
        console.log("start maping");
        console.log(task);
        if (task.id === targetTask) {
          console.log("yo");
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleAddNewTask = (event) => {
    event.preventDefault();
    setTaskId((taskId += 1));
    const newTask = {
      id: taskId,
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
  const removeBtn = (event) => {
    const targetTask = event.target.parentElement.id;
    const newTasks = sortedTasks(targetTask);
    setTask(newTasks);
  };

  function sortedTasks(value) {
    return tasks.filter((task) => task.id != value);
  }

  return (
    <div className="App">
      <Header />
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              todo={task.task}
              onClick={removeBtn} //to  react on remove button
              onClickCheck={handleComplete} //to do on click check btn
              progress={task.completed}
            />
          );
        })}
      </ul>
      <UserInput
        onInput={handleUserInput}
        onNewTask={handleAddNewTask}
        userInput={userInput}
      />
    </div>
  );
}

export default App;
