import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  submitForm(e) {
    e.preventDefault();
    const text = this.state.text;

    if (text === "") {
      return false;
    }
    this.props.submitForm(text);
    this.setState({
      text: ""
    });
  }

  handleChangeInput(e) {
    const inputValue = e.target.value;
    if (inputValue === "") {
      return false;
    }
    this.setState({
      text: inputValue
    });
  }

  render() {
    return (
      <div className="from-group text-center ">
        <form onSubmit={this.submitForm.bind(this)}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChangeInput.bind(this)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
    );
  }
}
