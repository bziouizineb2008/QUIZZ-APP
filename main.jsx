import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import Home from './Home.jsx'
import QuizPage from './QuizPage.jsx'
import SignIn from './SignIn.jsx'

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const targetId = decodeURIComponent(hash.slice(1))
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [hash, pathname])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:slug" element={<QuizPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
