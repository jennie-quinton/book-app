import React, { Component } from 'react';

export class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book">
        <img
          className="book_img"
          src={require('../assets/images/books/' + this.props.image + '.jpg')}
        />
        <div className="book_title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="book_author">
          <h2>{this.props.author}</h2>
        </div>
        <div className="book_description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
