const TaskList = ({ todos }) => {
  return (
    <div className="mt-5 p-5 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-3">Task List</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((task, index) => (
            <li key={index} className="p-2 border-b">
              {task}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
