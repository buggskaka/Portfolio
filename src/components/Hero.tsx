import styles from './Hero.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
    const { hero } = portfolioData;

    return (
        <section className={`container ${styles.hero}`}>
            <div className={styles.glow} />
            <div className={styles.glow2} />

            <div>
                <span className={styles.label}>{hero.title}</span>
                <h1 className={`${styles.title} gradient-text`}>
                    {hero.subtitle}
                </h1>
                <p className={styles.subtitle}>
                    {hero.description}
                </p>

                <a href="#experience" className={styles.ctaButton}>
                    View Full-Time Impact
                </a>
            </div>

            <div className={styles.statsGrid}>
                {hero.stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <h3 className="gradient-accent">{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
