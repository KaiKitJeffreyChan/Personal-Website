import React, { Component } from "react";

export default class ClassClick extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div>
        {this.state.on && <p> hello</p>}
        <button onClick={this.toggle}>show and hide</button>
      </div>
    );
  }
}
