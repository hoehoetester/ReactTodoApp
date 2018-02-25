import React from "react";
import { render } from "react-dom";
import TodoApp from "./TodoApp";

const dummyData = [
  { id: 1, todo: "clean room", isCompleted: false },
  { id: 2, todo: "change lightbulb", isCompleted: true },
  { id: 3, todo: "learn react", isCompleted: false }
];

render(<TodoApp dummyData={dummyData} />, document.getElementById("root"));
