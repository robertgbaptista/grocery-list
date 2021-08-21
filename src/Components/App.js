import React from 'react';
import '../styles/App.css';
import AddList from './AddList';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>Lists!</h1>
        </header>
  
        <AddList />
  
      </div>
    );

  }
}

export default App;
