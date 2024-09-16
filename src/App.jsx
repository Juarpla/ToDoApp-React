import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  
  const addTodo = (title) => {
    setTodos((currentTodos) => {
        return [
            ...currentTodos,
            {id: crypto.randomUUID(), title: title, isCompleted: false},
        ]
    })
  }
  
  const toggleTodo = (id, isCompleted) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, isCompleted}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(
        todo => todo.id !== id
      )
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default App