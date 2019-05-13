import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <div>Todo 任务管理</div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
