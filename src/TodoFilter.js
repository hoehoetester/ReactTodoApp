import React from "react";

const TodoFilter = ({ changeFilter }) => {
  return (
    <div className="from-group text-center ">
      <select onChange={changeFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default TodoFilter;
