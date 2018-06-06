import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import { todos } from './todos';
import Cards from './components/cards/Cards';
import TodoForm from "./components/form/TodoForm";
import {Grid} from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Navigation title="Gestionar tareas"/>
          <Grid container spacing={24}>
              <Grid item xs={3}>
                  <TodoForm/>
              </Grid>
              <Grid item xs={9}>
                  <Cards/>
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
