import React, { Component } from 'react';
import { Book } from './components/Book';
import { Header } from './components/Header';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>Current Book</h2>
        <Book
          title="Lord of Shadows"
          author="Cassandra Clare"
          description="Shadowhunter Novel, Dark Artifacts Book 2, Emma and Julian"
        />
      </div>
    );
  }
}

export default App;
