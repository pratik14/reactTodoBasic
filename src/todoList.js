import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    let { list } = this.props
    list = list.map((todo) =>  <TodoItem key={todo.id} todo={todo} /> )
    
    return (
      <ul>
       { list }
      </ul>
    );
  }
}


function TodoItem(props){
  const { todo } = props;
  return(
    <li>
      <p><input type="checkbox" value={todo.completed}  /></p>
      <p>{todo.name}</p>
    </li> 
  )
}

export default TodoList;
