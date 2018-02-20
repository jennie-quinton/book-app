import React, { Component } from 'react';
import { Book } from './components/Book';
import { Header } from './components/Header';
import booksData from './assets/json/books.json';

class App extends Component {
  render() {
    const booksHtml = booksData.map(book => {
      return (
        <li className="books-list-item" key={book.image}>
          <Book
            title={book.title}
            image={book.image}
            author={book.author}
            description={book.description}
            current={book.current}
          />
        </li>
      );
    });

    return (
      <div className="App">
        <Header />
        <h2>Current Book</h2>
        <ul className="books-list">{booksHtml}</ul>
      </div>
    );
  }
}

export default App;
