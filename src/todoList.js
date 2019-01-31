import React, { Component } from 'react';
import TodoItem from './todoItem'

class TodoList extends Component {
  render() {
    let { list, updateTodo } = this.props

    if(list.length == 0){
      return null;
    }


    const pendingTodos = list.filter((t) => !t.completed)
    const completedTodos = list.filter((t) => t.completed)

    const pendingList = pendingTodos.map((todo) =>  { 
      return(
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} /> 
      )
    })
    
    const completedList = completedTodos.map((todo) =>  { 
      return(
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} /> 
      )
    })


    return (
      <div>
        <h3>Pending</h3>
        <ul>
          { pendingList }
        </ul>
        <h3>Completed</h3>
        <ul id='completed-tasks'>
          { completedList }
        </ul>
      </div>
    );
  }
}

export default TodoList;
