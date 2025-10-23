const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  )
}

export default Card