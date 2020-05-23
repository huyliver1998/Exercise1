import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";

const todos = [
  { id: 1, title: "Do exercises", isCompleted: false, isInTrash: false },
  { id: 2, title: "Reading Book", isCompleted: true, isInTrash: false },
  { id: 3, title: "play game", isCompleted: false, isInTrash: false },
];

ReactDOM.render(<App todos={todos}/>, document.getElementById("root"));
