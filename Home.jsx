import {
  ArrowRight,
  Brain,
  CircleCheck,
  Flame,
  Gamepad2,
  Globe2,
  Loader2,
  Menu,
  Play,
  PlayCircle,
  Star,
  Timer,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category.jsx'
import Quizzes from './Quizzes.jsx'
import Leaderboard from './Leaderboard.jsx'
import Leaderboard2 from './Leaderboard2.jsx'
import Lastbox from './Lastbox.jsx'
import Lastbox2 from './Lastbox2.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="whole-thing" id="top">
        <header>
          <a className="logo" href="#top" aria-label="QuizVerse home">
            <Brain className="logo-icon" size={22} aria-hidden="true" />
            <span>Quiz<span>Verse</span></span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
          <nav id="main-navigation" className={isMenuOpen ? 'nav-open' : ''} aria-label="Main navigation">
            <ul className="nav">
              <li><a href="#top" onClick={closeMenu}>Home</a></li>
              <li><a href="#categories" onClick={closeMenu}>Categories</a></li>
              <li><a href="#featured-quizzes" onClick={closeMenu}>Quizzes</a></li>
              <li><a href="#leaderboard" onClick={closeMenu}>Leaderboard</a></li>
              <li className="mobile-sign-in"><Link to="/sign-in" onClick={closeMenu}>Sign in</Link></li>
            </ul>
          </nav>
          <div className="btn-sign-in">
            <Link className="sign-in-link" to="/sign-in">Sign in</Link>
            <a className="play-now-link" href="#featured-quizzes">Play now</a>
          </div>
        </header>

        <main>
          <section className="home-hero" aria-labelledby="hero-title">
            <div className="home-hero-grid">
              <div className="home-hero-copy">
                <p className="hero-live"><span />Over 12,000 questions live right now</p>
                <h1 id="hero-title">Play. Learn.<span>Compete.</span></h1>
                <p className="hero-description">QuizVerse turns trivia into a full-on 3D arena. Pick a category, race the clock, stack combos and climb the leaderboard, one question at a time.</p>
                <div className="hero-actions">
                  <a className="hero-primary" href="#featured-quizzes">Start a quiz <ArrowRight size={20} aria-hidden="true" /></a>
                  <a className="hero-secondary" href="#featured-quizzes"><PlayCircle size={20} aria-hidden="true" /> Browse quizzes</a>
                </div>
                <div className="hero-social-proof">
                  <div className="hero-avatars" aria-hidden="true">
                    <span> </span><span> </span><span> </span><span> </span>
                  </div>
                  <div className="hero-rating">
                    <div><span aria-label="5 stars">★★★★★</span><strong>4.9</strong></div>
                    <p>Loved by 240,000+ players</p>
                  </div>
                </div>
              </div>

              <div className="hero-visual" aria-label="Sample space quiz question">
                <div className="hero-orbit hero-orbit--outer" />
                <div className="hero-orbit hero-orbit--inner" />
                <div className="hero-correct"><CircleCheck size={17} fill="currentColor" />Correct!</div>
                <article className="hero-question-card">
                  <div className="hero-question-top">
                    <span className="hero-question-category">Space · Q7</span>
                    <span className="hero-timer"><Timer size={16} />12s</span>
                  </div>
                  <h2>Which planet has the most moons in our solar system?</h2>
                  <div className="hero-answers">
                    <div className="hero-answer hero-answer--correct"><CircleCheck size={21} fill="currentColor" />Saturn</div>
                    <div className="hero-answer"><span />Jupiter</div>
                    <div className="hero-answer"><span />Neptune</div>
                  </div>
                </article>
                <div className="hero-combo"><Flame size={17} fill="currentColor" />Combo x3</div>
                <div className="hero-points"><Zap size={18} fill="currentColor" />+120 pts</div>
              </div>
            </div>
          </section>

          <div className="ticker-window" aria-label="Quiz categories">
            <div className="tape-bar">
              {[0, 1].map((copy) => (
                <div className="ticker-group" aria-hidden={copy === 1} key={copy}>
                  <span><Star />Space</span>
                  <span><PlayCircle />Movies</span>
                  <span><Gamepad2 />Gaming</span>
                  <span><Brain />History</span>
                  <span><Flame />Music</span>
                  <span><Globe2 />Sports</span>
                  <span><Zap />Food</span>
                  <span><Loader2 />Science</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Category />
      <Quizzes />
      <Leaderboard />
      <Leaderboard2 />
      <Lastbox />
      <Lastbox2 />
      <Footer />
    </>
  )
}

export default App
