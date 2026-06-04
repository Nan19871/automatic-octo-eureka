import { useState } from 'react'

interface Errors {
  name?: string
  email?: string
  message?: string
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validate = (values: typeof form): Errors => {
    const errs: Errors = {}
    if (!values.name.trim()) {
      errs.name = '请输入姓名'
    } else if (values.name.trim().length < 2) {
      errs.name = '姓名至少2个字符'
    }
    if (!values.email.trim()) {
      errs.email = '请输入邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = '邮箱格式不正确'
    }
    if (!values.message.trim()) {
      errs.message = '请输入留言'
    } else if (values.message.trim().length < 10) {
      errs.message = '留言至少10个字符'
    }
    return errs
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    if (touched[e.target.name]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true })
    setErrors(validate(form))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, message: true }
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    alert(`感谢您的留言！\n姓名：${form.name}\n邮箱：${form.email}\n消息：${form.message}`)
    setForm({ name: '', email: '', message: '' })
    setTouched({})
    setErrors({})
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 ${errors[field] && touched[field] ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'}`

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">联系我们</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        有任何问题或建议？请填写下方表单，我们会尽快回复。
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass('name')}
          />
          {errors.name && touched.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">邮箱</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass('email')}
          />
          {errors.email && touched.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">留言</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass('message')} resize-none`}
          />
          {errors.message && touched.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="self-start px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          提交
        </button>
      </form>
    </section>
  )
}

export default Contact
