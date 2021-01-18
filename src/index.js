import React from "react";
import { render } from "react-dom";
import "./index.css";

import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods from "./components/Moods";
import Spinner from "./components/Spinner";
import Squares from "./components/Squares";
import Programmers from "./components/Programmers";
import Todos from "./Todos.js";

import "bootstrap/dist/css/bootstrap.css";

render(
  <>
    {/* <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers /> */}
    <div>
      <Todos />
    </div>
  </>,
  document.querySelector("#root")
);

/* Form Inputs  */
/*component to display todo list items */
/* useState {} to hold todos with {id: <todos.id>, name: <todos.name> status: <complete/incomplete>} */
/* way to delete todo items as well as to strike through*/
