function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">关于我们</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        我们致力于打造优秀的软件产品，用技术创造价值。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3">我们的使命</h2>
          <p className="text-gray-600 dark:text-gray-400">
            通过创新的技术解决方案，帮助用户解决实际问题，提升工作效率。
          </p>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3">我们的愿景</h2>
          <p className="text-gray-600 dark:text-gray-400">
            成为行业领先的技术团队，推动技术发展与创新。
          </p>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3">我们的价值观</h2>
          <p className="text-gray-600 dark:text-gray-400">
            追求卓越、拥抱变化、协作共赢、用户至上。
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
