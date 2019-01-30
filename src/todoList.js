import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    let { list } = this.props
    list = list.map((todo) =>  <li key={todo.name}>{todo.name}</li> )
    
    return (
      <ul>
       { list }
      </ul>
    );
  }
}

export default TodoList;
