import { useState } from "react";
import Card2 from "./Card2";
import TaskList from "./TaskList";
const Card1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      {" "}
      <div className="flex justify-center items-center h-screen text-center">
        <div className="shadow-lg p-10 rounded-2xl bg-amber-50">
          <h1 className="text-2xl font-bold mb-10">To-Do List</h1>

          <div>
            <input
              className="border-1 border-solid bg-white px-5 py-3 rounded-xl"
              type="text"
              placeholder="Add a new task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          {/* <p>You Typed: {inputValue}</p> */}
          <button
            className="mt-7 bg-amber-900 py-2 px-5 rounded-xl text-white"
            onClick={addTask}
          >
            Add Task
          </button>
          <Card2 todos={todos} />
          <TaskList todos={todos} />
        </div>
      </div>
    </>
  );
};
export default Card1;
