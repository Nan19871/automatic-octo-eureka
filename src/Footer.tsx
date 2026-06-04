function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 px-6 py-8 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">GitHub</a>
          <a href="mailto:contact@example.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">联系我们</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
