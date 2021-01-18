import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.css";

/* Form:  Input, submit  */
/*component to display todo list items */
/* useState [] to hold todos with {id: <todos.id>, name: <todos.name> status: <complete/incomplete>} */
/* way to delete todo items as well as to strike through*/

const initialTodo = {
  id: "",
  description: "",
  complete: false,
};

const initialTodoList = [
  {
    id: uuidv4(),
    description: "Click to Toggle Done/ Undone",
    complete: false,
  },
];
const Todos = () => {
  const [todos, setTodos] = useState(initialTodoList);
  const [todo, setTodo] = useState(initialTodo);

  const handleChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  console.log(todo.description);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(uuidv4());

    setTodos([...todos, { ...todo, id: uuidv4() }]);
    setTodo(initialTodo);
    console.log({ todos });
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };

  return (
    <div className="card container d-flex flex-column align-content-center justify-content-center">
      <div
        className="d-flex flex-column justify-content-center
       align-content-center todo-page"
      >
        <h3 className="display-4" style={{ padding: "2rem" }}>
          My's Todo list
        </h3>
        <div className="d-flex justify-content-center align-content-center">
          <form
            className="todo-form d-flex align-content-center"
            onSubmit={submitHandler}
          >
            <textarea
              rows={1}
              className={"todo-form"}
              name="Todo"
              value={todo.description}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="todo-submit-button"
              onSubmit={submitHandler}
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>

      <div
        className="todo-list d-flex flex-column"
        style={{ padding: "3rem", textAlign: "center", marginTop: "2rem" }}
      >
        {todos.map((todo) => {
          return (
            <div
              onClick={() => handleCompleted(todo.id)}
              key={todo.id}
              style={{
                border: "2px, solid, black",
                padding: "1rem 5rem",
                margin: "1rem 0",
                textDecoration: todo.complete && "line-through",
                backgroundColor: todo.complete && "black",
                color: todo.complete && "#444",
                opacity: todo.complete && "0.4",
              }}
            >
              <ul>
                <li
                  style={{
                    textShadow: "none",
                    textAlign: "center",
                  }}
                >
                  {todo.description}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
