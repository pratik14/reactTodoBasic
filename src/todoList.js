import React, { Component } from 'react';
import TodoItem from './todoItem'

class TodoList extends Component {

  completedList(){
    const { list, updateTodo } = this.props
    const completedTodos = list.filter((t) => t.completed)

    if(completedTodos.length == 0){ return null }
    
    const completedList = completedTodos.map((todo) =>  { 
      return(
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} /> 
      )
    })

    return(
      <div>
        <h3>Completed</h3>
        <ul>{ completedList }</ul>
      </div>
    )
  }

  pendingList(){
    const { list, updateTodo } = this.props
    const pendingTodos = list.filter((t) => !t.completed)

    if(pendingTodos.length == 0){ return null }
    
    const pendingList = pendingTodos.map((todo) =>  { 
      return(
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} /> 
      )
    })

    return(
      <div>
        <h3>Pending</h3>
        <ul>{ pendingList }</ul>
      </div>
    )
  }



  render() {
    return (
      <div>
        { this.pendingList() }
        { this.completedList() }
      </div>
    );
  }
}

export default TodoList;
