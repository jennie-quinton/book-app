import React, { Component } from 'react';
import { Book } from './components/Book';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
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
