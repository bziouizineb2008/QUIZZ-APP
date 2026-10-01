import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Brain, CircleCheck, RotateCcw, Timer } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { featuredQuizzes } from './Quizzes.jsx'
import './App.css'

const secondsPerQuestion = 15

function QuizPage() {
  const { slug } = useParams()
  const quiz = featuredQuizzes.find((item) => item.slug === slug)
  const questions = quiz?.questionBank ?? []
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [timeLeft, setTimeLeft] = useState(secondsPerQuestion)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!quiz || isComplete || selectedAnswer !== null || timeLeft === 0) return undefined

    const timerId = window.setInterval(() => {
      setTimeLeft((currentTime) => Math.max(currentTime - 1, 0))
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [isComplete, quiz, selectedAnswer, timeLeft])

  if (!quiz) {
    return (
      <main className="quiz-page">
        <section className="quiz-not-found">
          <Brain size={34} aria-hidden="true" />
          <h1>Quiz not found</h1>
          <p>That deck is not available. Pick another one from the arena.</p>
          <Link className="quiz-action-primary" to="/#featured-quizzes">Browse quizzes</Link>
        </section>
      </main>
    )
  }

  const question = questions[questionIndex]
  const isTimedOut = timeLeft === 0 && selectedAnswer === null
  const canContinue = selectedAnswer !== null || isTimedOut
  const progress = ((questionIndex + 1) / questions.length) * 100
  const timerProgress = (timeLeft / secondsPerQuestion) * 100

  function continueQuiz() {
    if (!canContinue) return

    if (selectedAnswer === question.answer) {
      setScore((currentScore) => currentScore + 1)
    }

    if (questionIndex === questions.length - 1) {
      setIsComplete(true)
      return
    }

    setQuestionIndex((currentIndex) => currentIndex + 1)
    setSelectedAnswer(null)
    setTimeLeft(secondsPerQuestion)
  }

  function restartQuiz() {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setTimeLeft(secondsPerQuestion)
    setScore(0)
    setIsComplete(false)
  }

  return (
    <main className="quiz-page">
      <header className="quiz-page-header">
        <Link className="quiz-brand" to="/" aria-label="QuizVerse home">
          <Brain size={21} aria-hidden="true" />
          <span>Quiz<span>Verse</span></span>
        </Link>
        <Link className="quiz-exit" to="/#featured-quizzes">
          <ArrowLeft size={17} aria-hidden="true" /> Back to quizzes
        </Link>
      </header>

      {isComplete ? (
        <section className="quiz-result-card" aria-live="polite">
          <span className="quiz-result-icon"><CircleCheck size={34} aria-hidden="true" /></span>
          <p className="quiz-result-eyebrow">Deck complete</p>
          <h1>{score === questions.length ? 'Perfect run!' : 'Nice work!'}</h1>
          <p className="quiz-result-copy">You scored <strong>{score} out of {questions.length}</strong> in {quiz.title}.</p>
          <div className="quiz-result-actions">
            <button className="quiz-action-primary" type="button" onClick={restartQuiz}>
              <RotateCcw size={17} aria-hidden="true" /> Play again
            </button>
            <Link className="quiz-action-secondary" to="/#featured-quizzes">Choose another quiz</Link>
          </div>
        </section>
      ) : (
        <section className="quiz-game-card" aria-labelledby="quiz-question-title">
          <div className="quiz-game-meta">
            <span className="quiz-question-count">Question {questionIndex + 1} / {questions.length}</span>
            <span
              className={`quiz-countdown${timeLeft <= 5 ? ' quiz-countdown--urgent' : ''}`}
              style={{ '--timer-progress': `${timerProgress}%` }}
              aria-label={`${timeLeft} seconds remaining`}
            >
              <span><Timer size={14} aria-hidden="true" />{timeLeft}s</span>
            </span>
          </div>
          <div
            className="quiz-progress-track"
            role="progressbar"
            aria-label="Quiz progress"
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-valuenow={questionIndex + 1}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <p className="quiz-category-label">{quiz.category} · {quiz.difficulty}</p>
          <h1 id="quiz-question-title">{question.prompt}</h1>

          <div className="quiz-options" role="group" aria-label="Answer choices">
            {question.options.map((option, optionIndex) => {
              const isSelected = selectedAnswer === optionIndex
              const isCorrect = selectedAnswer !== null && question.answer === optionIndex
              const isWrong = isSelected && question.answer !== optionIndex
              const stateClass = isCorrect ? ' quiz-option--correct' : isWrong ? ' quiz-option--wrong' : ''

              return (
                <button
                  className={`quiz-option${stateClass}`}
                  type="button"
                  key={option}
                  aria-pressed={isSelected}
                  disabled={selectedAnswer !== null || isTimedOut}
                  onClick={() => setSelectedAnswer(optionIndex)}
                >
                  <span className="quiz-option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                  <span>{option}</span>
                  {isCorrect && <CircleCheck className="quiz-option-check" size={20} aria-label="Correct answer" />}
                </button>
              )
            })}
          </div>

          <div className="quiz-game-footer" aria-live="polite">
            <span className="quiz-feedback">
              {isTimedOut ? 'Time is up. The correct answer is highlighted.' : selectedAnswer !== null ? selectedAnswer === question.answer ? 'That is correct!' : 'Not quite. The correct answer is highlighted.' : 'Choose your answer before the timer runs out.'}
            </span>
            <button className="quiz-next-button" type="button" disabled={!canContinue} onClick={continueQuiz}>
              {questionIndex === questions.length - 1 ? 'See results' : 'Next'}
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </section>
      )}
    </main>
  )
}

export default QuizPage
