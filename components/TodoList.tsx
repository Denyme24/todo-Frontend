'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import TodoItem from './TodoItem'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
      <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6 space-y-4">
        <div className="flex space-x-2">
          <Input
              type="text"
              placeholder="Add a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyUp ={(e) => e.key === 'Enter' && addTodo()}
              className="flex-grow"
          />
          <Button onClick={addTodo}>Add</Button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
              <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                  onEdit={(newText) => editTodo(todo.id, newText)}
              />
          ))}
        </ul>
      </div>
  )
}

