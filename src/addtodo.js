import { useState } from "react";

const AddToDo = () => {
  const [todo, setTodo] = useState([]);
  const [formData, setFormData] = useState({
    todoName: "",
    isCompleted: false,
  });
  function handleChange(e) {
    setFormData({ todoName: e.target.value, isCompleted: false });
  }
  function handleDone(index) {
    const updatedTodo = todo.map((item, i) => {
      if (index === i) {
        return { todoName: item.todoName, isCompleted: true };
      }
      return { todoName: item.todoName, isCompleted: item.isCompleted };
    });
    setTodo(updatedTodo);
  }
  function handleDelete(index) {
    const updatedTodo = [];
    todo.map((item, i) => {
      if (index !== i) {
        updatedTodo.push(item);
      }
    });
    setTodo(updatedTodo);
  }
  console.log(todo);

  return (
    <>
      <div>
        <h3>Enter Todo's</h3>
        <form
          onSubmit={(e) => {
            console.log("e", e.target.value);
            e.preventDefault();
            const abc = [...todo];
            abc.push(formData);
            setTodo(abc);
          }}
        >
          <input type="text" onChange={(e) => handleChange(e)} />
          <button>Submit</button>
        </form>
      </div>
      <ul>
        {todo.map((item, i) => (
          <div>
            <li
              key={i}
              style={
                item.isCompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {item.todoName}
            </li>
            <button onClick={() => handleDone(i)}>Done</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default AddToDo;
