import React from "react";

export default class TodoFilter extends React.Component {
    render() {
        return (
            <select onChange={this.props.changeFilter}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incompleted">Incompleted</option>
            </select>
        );
    }
}
