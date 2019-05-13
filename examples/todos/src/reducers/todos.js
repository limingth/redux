const f_alltodos = (mystate = [], action) => {
  console.log(mystate)
  console.log(action)
  switch (action.type) { 
    case 'ADD_TODO':
      return [
        ...mystate,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return mystate.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DEL_TODO':
      //return mystate.filter(todo => todo.id != action.id)
      return mystate.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DEL_ALL_TODO':
      console.log("reducers/todos", "DEL_ALL_TODO")
      return []
    default:
      console.log('state is ', mystate)
      return mystate
  }
}

export default f_alltodos
