import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import { todos } from './todos';
import Cards from './components/cards/Cards';
import TodoForm from "./components/form/TodoForm";
import {Grid} from '@material-ui/core';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    removeTodo(index){
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        })
    }

  render() {
    return (
      <div className="App">
          <Navigation title="Gestionar tareas"/>
          <Grid container spacing={24}>
              <Grid item xs={3}>
                  <TodoForm onAddTodo={this.handleAddTodo}/>
              </Grid>
              <Grid item xs={9}>
                  <Cards data={todos} removeTask={this.removeTodo}/>
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
