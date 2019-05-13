import { combineReducers } from 'redux'
import array_todos from './todos'
import my_visibilityFilter from './visibilityFilter'

export default combineReducers({
  array_todos,
  my_visibilityFilter
})
