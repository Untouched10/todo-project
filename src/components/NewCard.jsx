const NewCard = ({ todos }) => {
  return (
    <>
      <div className="shadow-lg p-10 rounded-2xl bg-amber-50">
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
    </>
  );
};
export default NewCard;
