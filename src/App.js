import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import { todos } from './todos';
import Cards from './components/cards/Cards';

class App extends Component {

  render() {

    return (
      <div className="App">
          <Navigation title="Gestionar tareas"/>
          <Cards/>
      </div>
    );
  }
}

export default App;
