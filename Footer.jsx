import {
    Brain,
    Camera,
    Gamepad2,
    PlayCircle,
    X,
} from 'lucide-react'
import './App.css'

const footerGroups = [
    {
        title: 'Play',
        links: [
            { label: 'Featured quizzes', href: '#featured-quizzes' },
            { label: 'Categories', href: '#categories' },
            { label: 'Daily challenge', href: '#featured-quizzes' },
            { label: 'Multiplayer', href: '#leaderboard' },
        ],
    },
    {
        title: 'Community',
        links: [
            { label: 'Leaderboard', href: '#leaderboard' },
            { label: 'Achievements', href: '#leaderboard' },
            { label: 'Discord', href: 'https://discord.com' },
            { label: 'Creator program', href: 'mailto:creators@quizverse.app' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About us', href: '#testimonials-title' },
            { label: 'Careers', href: 'mailto:careers@quizverse.app' },
            { label: 'Blog', href: '#featured-quizzes' },
            { label: 'Contact', href: 'mailto:hello@quizverse.app' },
        ],
    },
]

const socialLinks = [
    { label: 'X', href: 'https://x.com', icon: X },
    { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
    { label: 'YouTube', href: 'https://youtube.com', icon: PlayCircle },
    { label: 'Discord', href: 'https://discord.com', icon: Gamepad2 },
]

function Footer() {
    return (
        <footer className="site-footer" id="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <a className="footer-logo" href="#top" aria-label="QuizVerse home">
                        <span><Brain size={24} aria-hidden="true" /></span>
                        <strong>QuizVerse</strong>
                    </a>
                    <p>The 3D quiz playground for curious minds. Play a little, learn a lot, and never stop asking questions.</p>
                    <div className="footer-socials" aria-label="Social links">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                                <Icon size={21} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                {footerGroups.map(({ title, links }) => (
                    <nav className="footer-column" aria-label={`${title} links`} key={title}>
                        <h2>{title}</h2>
                        <ul>
                            {links.map(({ label, href }) => (
                                <li key={label}><a href={href}>{label}</a></li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            <div className="footer-bottom">
                <p>© 2026 QuizVerse. All rights reserved.</p>
                <nav aria-label="Legal links">
                    <a href="mailto:hello@quizverse.app?subject=Privacy">Privacy</a>
                    <a href="mailto:hello@quizverse.app?subject=Terms">Terms</a>
                    <a href="mailto:hello@quizverse.app?subject=Cookies">Cookies</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer