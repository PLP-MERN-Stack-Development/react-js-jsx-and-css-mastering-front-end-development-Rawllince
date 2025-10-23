import { useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useTheme } from '../contexts/ThemeContext'
import Button from './Button'
import Card from './Card'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [loadedAt, setLoadedAt] = useState(null)
  const { isDark } = useTheme()

  useEffect(() => {
    setLoadedAt(new Date().toLocaleString())
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      document.title = `Tasks (${tasks.filter(t => !t.completed).length} active)`
    } else {
      document.title = 'React Task Manager'
    }
    console.log(`Task list updated: ${tasks.length} total, ${tasks.filter(t => !t.completed).length} active`)
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  }

  return (
    <div className="space-y-6">
      {loadedAt && (
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Session started: {loadedAt} {isDark ? '🌙' : '☀️'}
        </div>
      )}
      <Card title="Add New Task">
        <form onSubmit={addTask} className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </form>
      </Card>

      <Card title="Task Statistics">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.active}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{stats.completed}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2 justify-center">
        <Button 
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All ({stats.total})
        </Button>
        <Button 
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active ({stats.active})
        </Button>
        <Button 
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed ({stats.completed})
        </Button>
      </div>

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No tasks found. {filter !== 'all' && 'Try changing the filter or add a new task!'}
            </p>
          </Card>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-4 animate-fade-in hover:shadow-lg transition-shadow"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <div className="flex-1">
                <p className={`${task.completed ? 'line-through text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                  {task.text}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(task.createdAt).toLocaleString()}
                </p>
              </div>
              <Button
                variant="danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskManager