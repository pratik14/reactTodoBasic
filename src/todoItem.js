import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props)

    this.markCompleted = this.markCompleted.bind(this)
  }


  markCompleted(){
    let { todo, updateTodo } = this.props
    todo.completed = !todo.completed
    updateTodo(todo)
  }

  render() {
    let { todo } = this.props
    console.log(todo);
    
    return(
      <li>
        <input type="checkbox"  onClick={this.markCompleted} />
        <label>{todo.name}</label>
      </li> 
    )
  }
}


export default TodoItem;
