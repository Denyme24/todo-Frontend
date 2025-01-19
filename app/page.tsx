import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 animate-gradient-x"></div>
      <div className="relative z-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-lg">My Todo App</h1>
        <TodoList />
      </div>
    </main>
  )
}

