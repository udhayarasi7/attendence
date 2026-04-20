import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginLeftSide from './LoginLeftSide'
import { ArrowLeftIcon, Eye, EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react'

const LoginForm = ({ role = 'admin', title = 'Login', subtitle = 'Sign in to your account' }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // Add your login logic here
    console.log({ email, password, role })
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className="w-full max-w-md">
          <Link to="/login" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors">
            <ArrowLeftIcon size={16} />
            Back to portal selection
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">{title}</h2>
            <p className="text-slate-500">{subtitle}</p>
          </div>
          {error && (
            <div className="mb-6 p-4  bg-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type={showpassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-16 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showpassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {showpassword ? <EyeOffIcon size={18} />:<EyeIcon size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-2.5 rounded-lg transition-all duration-300"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm