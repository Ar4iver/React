import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState(
    /*добавим обработчик добавления новой задачи  */
    []
  ) /* создали две переменные todos и setTodos чтобы менять состояние, где пустой массив это начальное значение для переменной todos */

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  } /* Добавим обработчик события добавления новой задачи, где укажим один параметр text, это текст для новой задачи. В функции мы будем вызывать setTodos и передавать обновленный массив задач */

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      {/* передали в TodoList переменную todos как свойство с таким же названием todos */}
    </div>
  )
}

export default App
