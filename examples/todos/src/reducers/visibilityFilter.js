import { VisibilityFilters } from '../actions'

const my_visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log("reducers visibilityFilter", {state}, {action})
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default my_visibilityFilter
