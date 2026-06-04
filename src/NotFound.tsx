import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-32">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">页面不存在</p>
      <Link to="/" className="text-blue-500 hover:underline font-medium">返回首页</Link>
    </section>
  )
}

export default NotFound
