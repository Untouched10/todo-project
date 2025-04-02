const NewCard = ({ todos }) => {
  return (
    <div className="shadow-lg p-10 rounded-2xl bg-amber-50 w-80">
      <h1 className="text-2xl font-bold mb-5">Task List</h1>
      <ul className="text-left">
        {todos.length > 0 ? (
          todos.map((task, index) => (
            <li key={index} className="p-2 flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                onChange={(e) =>
                  e.target.nextSibling.classList.toggle("line-through")
                }
              />
              <span>{task}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default NewCard;
