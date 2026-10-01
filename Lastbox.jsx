import { Quote, Sparkles } from 'lucide-react'
import './App.css'

const testimonials = [
    {
        quote: 'I open QuizVerse every morning with my coffee. The 3D cards are gorgeous and the questions actually teach me stuff.',
        name: 'Priya Sharma',
        role: 'Product Designer',
        seed: 'Priya-Sharma',
        background: 'ffb347',
    },
    {
        quote: 'We run office tournaments on the leaderboard every Friday. It got weirdly competitive and I love it.',
        name: 'Ben Carter',
        role: 'Engineering Lead',
        seed: 'Ben-Carter',
        background: 'b8dfc2',
    },
    {
        quote: 'The space and history decks are unreal. It feels like a game, not study, but somehow I remember everything.',
        name: 'Nadia Rossi',
        role: 'Teacher',
        seed: 'Nadia-Rossi',
        background: 'f6d8c8',
    },
]

function Lastbox() {
    return (
        <section className="testimonials-section" aria-labelledby="testimonials-title">
            <div className="testimonials-heading">
                <div className="testimonials-eyebrow">
                    <Sparkles size={16} aria-hidden="true" />
                    <span>Player love</span>
                </div>
                <h2 id="testimonials-title">Trivia that actually <span>sticks</span></h2>
                <p>Join a community of curious minds who play a little every day and remember a lot more.</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map(({ quote, name, role, seed, background }) => (
                    <article className="testimonial-card" key={name}>
                        <Quote className="testimonial-quote-icon" size={32} fill="currentColor" aria-hidden="true" />
                        <blockquote>{quote}</blockquote>
                        <div className="testimonial-author">
                            <img
                                src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}&backgroundColor=${background}`}
                                alt=""
                                loading="lazy"
                            />
                            <div>
                                <strong>{name}</strong>
                                <span>{role}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Lastbox