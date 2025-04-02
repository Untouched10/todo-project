import { useState } from "react";

const Card1 = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handlleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="shadow-lg p-10 rounded-2xl bg-amber-50 w-80">
      <h1 className="text-2xl font-bold mb-5">To-Do List</h1>
      <input
        className="border border-gray-300 px-4 py-2 rounded-md w-full"
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handlleKeyPress}
      />
      <button
        className="mt-4 bg-amber-900 text-white px-4 py-2 rounded-md w-full"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default Card1;
