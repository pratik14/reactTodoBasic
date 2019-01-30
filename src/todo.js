import React, { Component } from 'react';
import TodoList from './todoList'
import TodoForm from './todoForm'

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: []
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo){
    this.setState((prevState) => {
      return({
        list: [...prevState.list, todo]
      })
    })
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList list={list} />
      </div>
    );
  }
}

export default Todo;
