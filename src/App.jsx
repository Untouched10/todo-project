// import { useState } from "react";
// import { useState } from "react";
import Card1 from "./components/Card1";
import TaskList from "./components/TaskList";
import "./App.css";
// import NewCard from "./components/NewCard";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center text-center gap-10 h-screen p-10">
        <div>
          <Card1 />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </>
  );
};
export default App;
