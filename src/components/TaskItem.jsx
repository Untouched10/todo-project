import { useState } from "react";

function TaskItem({ todo, index, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleUpdate = () => {
    if (editValue.trim() !== "") {
      updateTask(index, editValue);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
