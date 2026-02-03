import styles from './Experience.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className={`container ${styles.section}`}>
            <div className={styles.header}>
                <h2 className={styles.title}>Full-Time Impact</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Strategic Leadership & Operational Execution</p>
            </div>

            <div className={styles.timeline}>
                {portfolioData.experience.map((job, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.roleHeader}>
                            <h3 className={styles.company}>{job.company}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                                <span className={styles.role}>{job.role}</span>
                                <span className={styles.period}>{job.period}</span>
                            </div>
                        </div>

                        <p className={styles.description}>{job.description}</p>

                        <ul className={styles.achievements}>
                            {job.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
