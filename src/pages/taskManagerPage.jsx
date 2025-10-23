import TaskManager from '../components/TaskManager'

const TaskManagerPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks and boost your productivity
        </p>
      </div>
      <TaskManager />
    </div>
  )
}

export default TaskManagerPage