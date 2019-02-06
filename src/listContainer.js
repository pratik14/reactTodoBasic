import { connect } from "react-redux";
import TodoList from './todoList'

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

export default connect(mapStateToProps)(TodoList)