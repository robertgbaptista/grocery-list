import React from 'react';
import '../styles/App.css';

import List from "./List";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>Grocery List</h1>
        </header>
  
        <List />
  
      </div>
    );

  }
}

export default App;
