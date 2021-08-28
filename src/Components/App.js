import React from 'react';
import '../styles/App.css';
import AddList from './AddList';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="app-header">
          <div className="text-4xl font-medium text-green-500">Grocery List Maker</div>
        </header>
  
        <AddList />
  
      </div>
    );

  }
}

export default App;
