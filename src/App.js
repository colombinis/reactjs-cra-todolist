import React, { Component } from 'react';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Learn some reactjs" },
      { id: 2, content: "Learn some react-native" }
    ]
  }

  deleteTodo = (id) => {
    console.log("deleteTodo", id);
    const newList = this.state.todos.filter((t) => {
      return t.id !== id;
    });
    this.setState({
      todos: newList
    });
  }

  addTodo = (t) => {
    console.log("addTodo", t.id);
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, t ]
      }
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo  addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
