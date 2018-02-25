import React from "react";

const TodoFilter = ({ changeFilter }) => {
    return (
        <select onChange={changeFilter}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incompleted">Incompleted</option>
        </select>
    );
};

export default TodoFilter;
