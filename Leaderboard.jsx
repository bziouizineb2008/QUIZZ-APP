import { MousePointer2, Sparkles, Timer, Trophy } from 'lucide-react'
import './App.css'

const steps = [
    {
        number: '01',
        title: 'Pick your arena',
        description: 'Choose from dozens of themed categories and hand-picked quiz decks built by real trivia nerds.',
        icon: MousePointer2,
        tone: 'orange',
    },
    {
        number: '02',
        title: 'Beat the clock',
        description: 'Answer timed questions, chain answers for combo bonuses and watch your score rocket upward.',
        icon: Timer,
        tone: 'mint',
    },
    {
        number: '03',
        title: 'Claim the crown',
        description: 'Save your results, track progress over time and climb the global weekly leaderboard.',
        icon: Trophy,
        tone: 'rose',
    },
]

function Leaderboard() {
    return (
        <section className="steps-section" id="how-it-works">
            <div className="steps-heading">
                <div className="steps-eyebrow">
                    <Sparkles size={16} aria-hidden="true" />
                    <span>How it works</span>
                </div>
                <h2>Three steps to <span>trivia glory</span></h2>
                <p>No fluff, no downloads. Just tap play and let the questions fly.</p>
            </div>

            <div className="steps-grid">
                {steps.map(({ number, title, description, icon: Icon, tone }) => (
                    <article className={`step-card step-card--${tone}`} key={number}>
                        <span className="step-number">{number}</span>
                        <span className="step-icon"><Icon size={27} strokeWidth={2.2} aria-hidden="true" /></span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Leaderboard