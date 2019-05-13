import { connect } from 'react-redux'
import { toggleTodo, delTodo, delAllTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (p_todos, p_filter) => {
  console.log('p_todos: ', p_todos)
  console.log('p_filter: ', p_filter)
  switch (p_filter) {
    case VisibilityFilters.SHOW_ALL:
      console.log('todos is ', p_todos)
      return p_todos
    case VisibilityFilters.SHOW_COMPLETED:
      return p_todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return p_todos.filter(t => !t.completed)
    case VisibilityFilters.HIDE_ALL:
      console.log("getVisibleTodos HIDE_ALL")
      return []
    default:
      throw new Error('Unknown filter: ' + p_filter)
  }
}

const mapStateToProps = state => ({
  mytodos_in_props: getVisibleTodos(state.array_todos, state.my_visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  delTodo: id => dispatch(delTodo(id)),
  delAllTodo: id => dispatch(delAllTodo())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
