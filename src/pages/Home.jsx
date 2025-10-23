import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to React Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern web application built with React, Vite, and Tailwind CSS
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Task Manager" className="animate-slide-in">
          <p className="mb-4">
            Manage your daily tasks with ease. Add, complete, and filter tasks with a clean and intuitive interface.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Add and delete tasks</li>
            <li>Mark tasks as completed</li>
            <li>Filter by status (All, Active, Completed)</li>
            <li>Data persists in local storage</li>
          </ul>
          <Link to="/tasks">
            <Button variant="primary" className="w-full">
              Go to Task Manager
            </Button>
          </Link>
        </Card>

        <Card title="API Data Explorer" className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <p className="mb-4">
            Browse data from JSONPlaceholder API with pagination and search functionality.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Fetch data from public API</li>
            <li>Search and filter posts</li>
            <li>Pagination support</li>
            <li>Loading and error states</li>
          </ul>
          <Link to="/api-data">
            <Button variant="primary" className="w-full">
              Explore API Data
            </Button>
          </Link>
        </Card>
      </div>

      <Card title="Features">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">React Hooks</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              useState, useEffect, useContext, and custom hooks
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Responsive Design</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Mobile-first design that works on all devices
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Dark Mode</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Toggle between light and dark themes
            </p>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Utility-first CSS with custom animations
            </p>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">API Integration</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Fetch and display data from external APIs
            </p>
          </div>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">Local Storage</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Persist data across browser sessions
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Home