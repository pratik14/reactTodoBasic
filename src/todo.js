import React, { Component } from 'react';
// import TodoList from './todoList'
// import TodoForm from './todoForm'
import TodoFormContainer from './todoFormContainer'
import TodoListContainer from './listContainer'

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: []
    }

    this.addTodo = this.addTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(todo){
    this.setState((prevState) => {
      return({
        list: [...prevState.list, todo]
      })
    })
  }

  updateTodo(todo){
    const { list } = this.state;
    const newList =  list.map(t => (t.id === todo.id ? todo : t))
    console.log(newList[0])
    this.setState({ list: newList })
  }

  removeTodo(todoId){
    const { list } = this.state;
    const newList =  list.filter(t => t.id !== todoId)
    this.setState({ list: newList })
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoFormContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default Todo;
