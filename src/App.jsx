import { useState } from "react";
import Card1 from "./components/Card1";
import "./App.css";
import NewCard from "./components/NewCard"; // Ensure this is the correct file

const App = () => {
  const [todos, setTodos] = useState([]); // Lift state to App component

  return (
    <div className="flex justify-center items-center text-center gap-10 h-screen p-10">
      {/* Pass todos and setTodos to Card1 */}
      <Card1 todos={todos} setTodos={setTodos} />

      {/* Pass todos to NewCard */}
      <NewCard todos={todos} />
    </div>
  );
};

export default App;
