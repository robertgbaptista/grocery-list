import React from 'react';
import AddList from './AddList';

class App extends React.Component {

  render() {
    return (
      <div className="bg-primary h-screen w-full font-syncopate">
        <header className="app-header p-6 text-center">
          <div className="text-4xl text-white uppercase font-bold">List Maker</div>
        </header>
  
        <AddList />
  
      </div>
    );

  }
}

export default App;
