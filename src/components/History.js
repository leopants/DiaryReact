import React, { Component } from 'react';

class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.currentQuote}</p>
      </div>
    );
  }
}



export default History;