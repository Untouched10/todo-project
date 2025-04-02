import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter A task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};
export default TaskInput;
