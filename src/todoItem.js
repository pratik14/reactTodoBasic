import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props)

    this.removeItem = this.removeItem.bind(this)
    this.markCompleted = this.markCompleted.bind(this)
  }


  markCompleted(){
    let { todo, updateTodo } = this.props
    todo.completed = !todo.completed
    updateTodo(todo)
  }

  removeItem(){
    let { todo, removeTodo } = this.props
    removeTodo(todo.id)
  }

  render() {
    let { todo } = this.props
    
    return(
      <li>
        <input type="checkbox"  checked={todo.completed} onClick={this.markCompleted} readOnly />
        <label>{todo.name}</label>
        <button onClick={this.removeItem}>Remove</button>
      </li> 
    )
  }
}


export default TodoItem;
