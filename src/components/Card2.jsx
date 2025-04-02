const Card2 = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
};
export default Card2;
