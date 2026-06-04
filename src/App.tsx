import { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium ${isActive ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'}`

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <nav className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">My App</span>

          <div className="flex items-center gap-2">
            {/* 深色模式切换 */}
            <button
              type="button"
              onClick={() => setDark(!dark)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              aria-label="切换深色模式"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* 桌面端导航 */}
            <div className="hidden md:flex gap-4">
              <NavLink to="/" end className={navLinkClass}>首页</NavLink>
              <NavLink to="/about" className={navLinkClass}>关于我们</NavLink>
              <NavLink to="/contact" className={navLinkClass}>联系我们</NavLink>
            </div>

            {/* 汉堡按钮 */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="切换菜单"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {menuOpen && (
          <div className="flex flex-col gap-2 mt-4 md:hidden">
            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'}`}>首页</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'}`}>关于我们</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'}`}>联系我们</NavLink>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
