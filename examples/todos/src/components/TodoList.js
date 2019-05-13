import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ mytodos_in_props, toggleTodo, delTodo }) => (
  <ul>
    {mytodos_in_props.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDel={() => delTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoList
