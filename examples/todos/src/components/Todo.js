import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDel, completed, text }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      任务 {text}   
    </li> 
    <button 
      onClick={onDel}      
    >
      Del
    </button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDel: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
