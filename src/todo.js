import React, { Component } from 'react';
import TodoList from './todoList'

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: []
    }
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <TodoList list={list} />
      </div>
    );
  }
}

export default Todo;
