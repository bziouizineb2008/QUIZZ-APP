import { ArrowRight, Bell, CircleHelp, Play } from 'lucide-react'
import './App.css'

function Lastbox2() {
    return (
        <section className="closing-section">
            <div className="closing-cta">
                <div className="closing-art" aria-hidden="true">
                    <span className="closing-question closing-question--one">?</span>
                    <span className="closing-question closing-question--two">?</span>
                    <span className="closing-die">?</span>
                    <span className="closing-orbit" />
                    <span className="closing-triangle" />
                    <span className="closing-dot closing-dot--one" />
                    <span className="closing-dot closing-dot--two" />
                </div>

                <div className="closing-copy">
                    <span className="closing-badge">
                        <Bell size={15} fill="currentColor" aria-hidden="true" />
                        Free to play, forever
                    </span>
                    <h2>Ready to test what you actually know?</h2>
                    <p>Jump into a deck, rack up combo bonuses and see your name climb the board. No sign-up wall, no downloads, just questions and glory.</p>
                    <div className="closing-actions">
                        <a className="closing-primary" href="#featured-quizzes">
                            Play a quiz now <Play size={15} fill="currentColor" aria-hidden="true" />
                        </a>
                        <a className="closing-secondary" href="#categories">
                            Explore categories <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <CircleHelp className="closing-question-mark" size={52} aria-hidden="true" />
            </div>
        </section>
    )
}

export default Lastbox2