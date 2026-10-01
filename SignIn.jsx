import { useState } from 'react'
import { ArrowLeft, Brain, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import './App.css'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('This preview is ready for an authentication service to be connected.')
  }

  return (
    <main className="auth-page">
      <header className="auth-header">
        <Link className="quiz-brand" to="/" aria-label="QuizVerse home">
          <Brain size={21} aria-hidden="true" />
          <span>Quiz<span>Verse</span></span>
        </Link>
        <Link className="auth-back-link" to="/">
          <ArrowLeft size={17} aria-hidden="true" /> Back to home
        </Link>
      </header>

      <section className="auth-layout">
        <div className="auth-intro">
          <span className="auth-eyebrow">Your next streak starts here</span>
          <h1>Welcome back to the <span>arena.</span></h1>
          <p>Sign in to save your quiz streaks, track your scores, and keep your place on the leaderboard.</p>
          <div className="auth-stat-row">
            <span><strong>240k+</strong> curious players</span>
            <span><strong>12,000</strong> questions waiting</span>
          </div>
        </div>

        <form className="auth-card" onSubmit={handleSubmit}>
          <div className="auth-card-heading">
            <h2>Sign in</h2>
            <p>Pick up right where you left off.</p>
          </div>

          <label className="auth-field">
            <span>Email address</span>
            <span className="auth-input-wrap">
              <Mail size={18} aria-hidden="true" />
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
            </span>
          </label>

          <label className="auth-field">
            <span>Password</span>
            <span className="auth-input-wrap">
              <LockKeyhole size={18} aria-hidden="true" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button
                className="auth-password-toggle"
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>

          <div className="auth-options-row">
            <label className="auth-remember"><input type="checkbox" name="remember" /> <span>Remember me</span></label>
            <button className="auth-forgot" type="button" onClick={() => setNotice('Password reset can be enabled when authentication is connected.')}>Forgot password?</button>
          </div>

          <button className="auth-submit" type="submit">Sign in</button>
          {notice && <p className="auth-notice" role="status">{notice}</p>}
          <p className="auth-switch">New to QuizVerse? <Link to="/#featured-quizzes">Explore quizzes</Link></p>
        </form>
      </section>
    </main>
  )
}

export default SignIn
