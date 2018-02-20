import React, { Component } from 'react';

export class Book extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="book">
        <img
          className="book-img"
          alt="cover of book"
          src={require(`../assets/images/books/${this.props.image}.jpg`)}
        />
        <div className="book-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="book-author">
          <h2>{this.props.author}</h2>
        </div>
        <div className="book-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
