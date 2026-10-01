import { ArrowRight, CircleHelp, Play, Sparkles, Star, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import './App.css'

export const featuredQuizzes = [
    {
        category: 'Space',
        title: 'Solar System Deep Dive',
        difficulty: 'Medium',
        rating: '4.9',
        questions: 15,
        players: '12,480',
        duration: '~8 min',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1100&q=85',
        alt: 'Colorful nebula and stars in deep space',
        slug: 'solar-system-deep-dive',
        questionBank: [
            { prompt: 'Which planet currently has the most confirmed moons?', options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'], answer: 1 },
            { prompt: 'Which star sits at the center of our solar system?', options: ['Sirius', 'Polaris', 'The Sun', 'Vega'], answer: 2 },
            { prompt: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Mercury', 'Jupiter'], answer: 0 },
            { prompt: 'Which is the largest planet in our solar system?', options: ['Earth', 'Saturn', 'Neptune', 'Jupiter'], answer: 3 },
            { prompt: 'What is the name of Earth’s natural satellite?', options: ['Titan', 'The Moon', 'Europa', 'Phobos'], answer: 1 },
        ],
    },
    {
        category: 'Science',
        title: 'The Human Body',
        difficulty: 'Easy',
        rating: '4.8',
        questions: 12,
        players: '20,310',
        duration: '~6 min',
        image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1100&q=85',
        alt: 'Medical anatomy model used for a science quiz',
        slug: 'the-human-body',
        questionBank: [
            { prompt: 'What is the largest organ in the human body?', options: ['The liver', 'The skin', 'The lungs', 'The heart'], answer: 1 },
            { prompt: 'Which organ pumps blood around your body?', options: ['The heart', 'The brain', 'The kidney', 'The stomach'], answer: 0 },
            { prompt: 'How many bones are in a typical adult body?', options: ['106', '156', '206', '306'], answer: 2 },
            { prompt: 'Which part of the body contains the smallest bones?', options: ['The hand', 'The ear', 'The foot', 'The nose'], answer: 1 },
            { prompt: 'What do red blood cells carry around the body?', options: ['Oxygen', 'Calcium', 'Insulin', 'Melanin'], answer: 0 },
        ],
    },
    {
        category: 'History',
        title: 'Rise of Ancient Rome',
        difficulty: 'Hard',
        rating: '4.7',
        questions: 18,
        players: '8,210',
        duration: '~9 min',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1100&q=85',
        alt: 'The Colosseum in Rome',
        slug: 'rise-of-ancient-rome',
        questionBank: [
            { prompt: 'Who was the first emperor of Rome?', options: ['Julius Caesar', 'Augustus', 'Nero', 'Constantine'], answer: 1 },
            { prompt: 'What was the main language of ancient Rome?', options: ['Greek', 'Etruscan', 'Latin', 'Phoenician'], answer: 2 },
            { prompt: 'What was the Roman Senate?', options: ['A council of citizens', 'A military unit', 'A temple', 'A trade guild'], answer: 0 },
            { prompt: 'Which volcano buried Pompeii in 79 CE?', options: ['Etna', 'Vesuvius', 'Stromboli', 'Krakatoa'], answer: 1 },
            { prompt: 'What was the famous Roman arena called?', options: ['The Parthenon', 'The Pantheon', 'The Colosseum', 'The Forum'], answer: 2 },
        ],
    },
    {
        category: 'Technology',
        title: 'Code & Circuits',
        difficulty: 'Medium',
        rating: '4.9',
        questions: 14,
        players: '17,640',
        duration: '~7 min',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85',
        alt: 'Circuit board and electronic components',
        slug: 'code-and-circuits',
        questionBank: [
            { prompt: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Power Utility', 'Core Program Upload', 'Central Program User'], answer: 0 },
            { prompt: 'Which language is commonly used to style web pages?', options: ['HTML', 'CSS', 'SQL', 'Bash'], answer: 1 },
            { prompt: 'What is the binary form of decimal 2?', options: ['01', '10', '11', '100'], answer: 1 },
            { prompt: 'Which component stores data temporarily while programs run?', options: ['SSD', 'GPU', 'RAM', 'Router'], answer: 2 },
            { prompt: 'What does URL stand for?', options: ['Uniform Resource Locator', 'Universal Reading Link', 'User Route List', 'Unified Reference Line'], answer: 0 },
        ],
    },
    {
        category: 'Geography',
        title: 'Wonders of the World',
        difficulty: 'Easy',
        rating: '4.8',
        questions: 10,
        players: '24,180',
        duration: '~5 min',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1100&q=85',
        alt: 'Mountain landscape beneath a bright sky',
        slug: 'wonders-of-the-world',
        questionBank: [
            { prompt: 'What is the largest country by area?', options: ['Canada', 'China', 'Russia', 'United States'], answer: 2 },
            { prompt: 'On which continent is the Sahara Desert?', options: ['Asia', 'Africa', 'Australia', 'South America'], answer: 1 },
            { prompt: 'Which ocean is the largest?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], answer: 3 },
            { prompt: 'Machu Picchu is in which country?', options: ['Peru', 'Chile', 'Mexico', 'Bolivia'], answer: 0 },
            { prompt: 'What is the capital of Japan?', options: ['Kyoto', 'Tokyo', 'Osaka', 'Sapporo'], answer: 1 },
        ],
    },
    {
        category: 'Movies',
        title: 'Cinema Classics',
        difficulty: 'Medium',
        rating: '4.7',
        questions: 16,
        players: '15,920',
        duration: '~8 min',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1100&q=85',
        alt: 'Rows of seats in a movie theater',
        slug: 'cinema-classics',
        questionBank: [
            { prompt: 'Who directed the original Jaws?', options: ['George Lucas', 'Steven Spielberg', 'Francis Ford Coppola', 'Ridley Scott'], answer: 1 },
            { prompt: 'Which film features the line “Here’s looking at you, kid”?', options: ['Casablanca', 'Citizen Kane', 'The Godfather', 'Sunset Boulevard'], answer: 0 },
            { prompt: 'What is the name of Dorothy’s dog in The Wizard of Oz?', options: ['Rin Tin Tin', 'Toto', 'Lassie', 'Benji'], answer: 1 },
            { prompt: 'Which actor played Indiana Jones?', options: ['Tom Hanks', 'Harrison Ford', 'Sean Connery', 'Mel Gibson'], answer: 1 },
            { prompt: 'What is the fictional African nation in Black Panther?', options: ['Genovia', 'Zamunda', 'Wakanda', 'Aldovia'], answer: 2 },
        ],
    },
]

function Quizzes() {
    return (
        <section className="featured-section" id="featured-quizzes">
            <div className="featured-header">
                <div className="featured-heading-copy">
                    <div className="featured-eyebrow">
                        <Sparkles size={16} aria-hidden="true" />
                        <span>Hand-picked decks</span>
                    </div>
                    <h2>Featured quizzes <span>this week</span></h2>
                    <p>Fresh decks trending across the community right now. Jump in and beat the average score.</p>
                </div>
                <a className="featured-view-all" href="#categories">
                    View all <ArrowRight size={19} aria-hidden="true" />
                </a>
            </div>

            <div className="featured-grid">
                {featuredQuizzes.map((quiz) => (
                    <article className="featured-card" id={quiz.slug} key={quiz.slug}>
                        <div className="featured-image-wrap">
                            <img src={quiz.image} alt={quiz.alt} loading="lazy" />
                            <span className={`difficulty difficulty--${quiz.difficulty.toLowerCase()}`}>
                                {quiz.difficulty}
                            </span>
                            <span className="quiz-rating">
                                <Star size={16} fill="currentColor" aria-hidden="true" /> {quiz.rating}
                            </span>
                        </div>
                        <div className="featured-card-content">
                            <span className="featured-category">{quiz.category}</span>
                            <h3>{quiz.title}</h3>
                            <div className="featured-stats">
                                <span><CircleHelp size={17} aria-hidden="true" /> {quiz.questions} questions</span>
                                <span><Users size={17} aria-hidden="true" /> {quiz.players} played</span>
                            </div>
                            <div className="featured-card-footer">
                                <span className="quiz-duration">{quiz.duration}</span>
                                <Link className="featured-play" to={`/quiz/${quiz.slug}`} aria-label={`Play ${quiz.title}`}>
                                    Play <Play size={14} fill="currentColor" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Quizzes