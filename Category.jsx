import {
    ArrowUpRight,
    Clapperboard,
    Cpu,
    FlaskConical,
    Gamepad2,
    Globe2,
    Landmark,
    Music2,
    Orbit,
    Palette,
    Sprout,
    Star,
    Utensils,
    Volleyball,
} from 'lucide-react'
import './App.css'

const categories = [
    { name: 'Nature', description: 'Wild & wonderful', quizzes: 73, icon: Sprout, tone: 'mint' },
    { name: 'Food', description: 'Taste the world', quizzes: 61, icon: Utensils, tone: 'orange' },
    { name: 'Art', description: 'Brush & canvas', quizzes: 54, icon: Palette, tone: 'rose' },
    { name: 'Gaming', description: 'Level up IRL', quizzes: 134, icon: Gamepad2, tone: 'mint' },
    { name: 'Science', description: 'Atoms to galaxies', quizzes: 128, icon: FlaskConical, tone: 'orange' },
    { name: 'History', description: 'Empires & eras', quizzes: 96, icon: Landmark, tone: 'rose' },
    { name: 'Geography', description: 'Places & people', quizzes: 84, icon: Globe2, tone: 'mint' },
    { name: 'Technology', description: 'Code & circuits', quizzes: 142, icon: Cpu, tone: 'orange' },
    { name: 'Space', description: 'Stars & beyond', quizzes: 67, icon: Orbit, tone: 'rose' },
    { name: 'Movies', description: 'Big screen trivia', quizzes: 155, icon: Clapperboard, tone: 'mint' },
    { name: 'Music', description: 'Beats & legends', quizzes: 112, icon: Music2, tone: 'orange' },
    { name: 'Sports', description: 'Games & glory', quizzes: 98, icon: Volleyball, tone: 'rose' },
]
function Category() {
    return (
        <section className="category-section" id="categories">
            <div className="category-heading">
                <div className="category-eyebrow">
                    <Star size={16} aria-hidden="true" />
                    <span>Browse the arena</span>
                </div>
                <h2>Pick a category, <span>start dominating</span></h2>
                <p>Twelve worlds of knowledge, each packed with curated question decks and fresh weekly drops.</p>
            </div>
            <div className="category-grid">
                {categories.map(({ name, description, quizzes, icon: Icon, tone }) => (
                    <a
                        className={`category-card category-card--${tone}`}
                        href="#featured-quizzes"
                        aria-label={`Explore ${name} quizzes`}
                        key={name}
                    >
                        <div className="category-card-top">
                            <span className="category-icon"><Icon size={25} strokeWidth={2.3} aria-hidden="true" /></span>
                            <ArrowUpRight className="category-arrow" size={21} aria-hidden="true" />
                        </div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <span className="quiz-count">{quizzes} quizzes</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Category;