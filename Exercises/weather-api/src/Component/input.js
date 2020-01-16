import React from "react";

export default class Input extends React.Component {
  state = {
    input: "london"
  };
  onInput = e => this.setState({ input: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <header>
        <input
          type="text"
          className="input-color"
          value={this.state.name}
          onChange={this.onInput}
        ></input>
        <button
          className="btn btn-primary"
          type="find weather"
          onClick={this.onSubmit}
        >
          FIND WEATHER
        </button>
      </header>
    );
  }
}
