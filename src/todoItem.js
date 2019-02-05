import React, { Component } from 'react';
import TodoForm from './todoForm'

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false
    }

    this.editItem = this.editItem.bind(this)
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

  editItem(){
    this.setState({ editing: true })
  }

  componentWillReceiveProps(props){
    this.setState({ editing: false })
  }

  render() {
    let { todo, updateTodo } = this.props
    const { editing } = this.state;

    if(editing){
      return(<TodoForm {...todo} onSubmitAction={updateTodo} />)
    }
    
    return(
      <li>
        <input type="checkbox"  checked={todo.completed} onClick={this.markCompleted} readOnly />
        <label>{todo.name}</label>
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.removeItem}>Remove</button>
      </li> 
    )
  }
}


export default TodoItem;
