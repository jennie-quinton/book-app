import React, { Component } from 'react';

export class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Book">
        <div className="title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="author">
          <h2>{this.props.author}</h2>
        </div>
        <div className="description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
