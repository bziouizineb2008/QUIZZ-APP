import { useState } from 'react'
import { Crown, Sparkles, Trophy } from 'lucide-react'
import './App.css'

const players = [
    { name: 'Maya Ortiz', streak: 32, score: 98450, seed: 'Maya-Ortiz', tint: 'ffbd59' },
    { name: 'Kai Nakamura', streak: 27, score: 96120, seed: 'Kai-Nakamura', tint: 'b7dfcc' },
    { name: 'Lara Ahmed', streak: 25, score: 94870, seed: 'Lara-Ahmed', tint: 'ff9b79' },
    { name: 'Diego Vargas', streak: 21, score: 91540, seed: 'Diego-Vargas', tint: 'e8d9c5' },
    { name: 'Sofia Petrov', streak: 18, score: 89010, seed: 'Sofia-Petrov', tint: 'f5d6a9' },
]

function playerAvatar(player) {
    return `https://api.dicebear.com/9.x/adventurer/svg?seed=${player.seed}&backgroundColor=${player.tint}`
}

function Leaderboard2() {
    const [championIndex, setChampionIndex] = useState(0)
    const champion = players[championIndex]

    return (
        <section className="ranking-section" id="leaderboard">
            <div className="ranking-heading">
                <div className="ranking-eyebrow">
                    <Sparkles size={16} aria-hidden="true" />
                    <span>Global ranking</span>
                </div>
                <h2>This week&apos;s <span>top players</span></h2>
                <p>Every quiz you finish pushes you up the board. Think you can take the number one spot?</p>
            </div>

            <div className="ranking-layout">
                <section className="ranking-board" aria-labelledby="weekly-leaderboard-title">
                    <div className="ranking-board-header">
                        <h3 id="weekly-leaderboard-title">Weekly leaderboard</h3>
                        <span className="ranking-live"><span />Live</span>
                    </div>
                    <ol className="ranking-list">
                        {players.map((player, index) => (
                            <li key={player.name}>
                                <button
                                    className={`ranking-player${championIndex === index ? ' is-selected' : ''}`}
                                    type="button"
                                    aria-pressed={championIndex === index}
                                    onClick={() => setChampionIndex(index)}
                                >
                                    <span className={`ranking-place ranking-place--${index + 1}`}>{index + 1}</span>
                                    <img className="ranking-avatar" src={playerAvatar(player)} alt="" />
                                    <span className="ranking-player-details">
                                        <strong>{player.name}</strong>
                                        <span>{player.streak}-day streak</span>
                                    </span>
                                    <strong className="ranking-score">{player.score}</strong>
                                </button>
                            </li>
                        ))}
                    </ol>
                </section>

                <aside className="champion-panel" aria-label={`Champion spotlight: ${champion.name}`}>
                    <span className="champion-tag">Champion</span>
                    <div className="champion-profile">
                        <div className="champion-avatar-wrap">
                            <img src={playerAvatar(champion)} alt={`${champion.name} avatar`} />
                            <Crown className="champion-crown" size={26} fill="currentColor" aria-hidden="true" />
                        </div>
                        <h3>{champion.name}</h3>
                        <p>{championIndex === 0 ? 'Undefeated this month' : `Ranked #${championIndex + 1} this week`}</p>
                    </div>
                    <div className="champion-stats">
                        <div>
                            <strong>{champion.score}</strong>
                            <span>Top score</span>
                        </div>
                        <div>
                            <strong>{champion.streak}</strong>
                            <span>Day streak</span>
                        </div>
                    </div>
                    <a className="champion-challenge" href="#featured-quizzes">
                        Challenge them <Trophy size={18} aria-hidden="true" />
                    </a>
                </aside>
            </div>
        </section>
    )
}

export default Leaderboard2