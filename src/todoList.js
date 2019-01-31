import React, { Component } from 'react';
import TodoItem from './todoItem'

class TodoList extends Component {
  renderList(flag, header){
    const { list, updateTodo } = this.props
    const todos = list.filter((t) => t.completed === flag)

    if(todos.length === 0){ return null }
    
    const newList = todos.map((todo) =>  { 
      return(
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} /> 
      )
    })

    return(
      <div>
        <h3>{header}</h3>
        <ul id={header + '-tasks'}>{ newList }</ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderList(false, 'pending') }
        { this.renderList(true, 'completed') }
      </div>
    );
  }
}

export default TodoList;
