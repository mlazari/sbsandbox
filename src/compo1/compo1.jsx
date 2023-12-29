import React, { Component } from 'react';

export class Compo1 extends Component {
  handleClick = (event) => {
    console.log('click 1');
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Hello world!
      </button>
    );
  }
}
