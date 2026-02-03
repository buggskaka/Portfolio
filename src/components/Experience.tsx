import styles from './Experience.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className={`container ${styles.section}`}>
            <div className={styles.header}>
                <h2 className={styles.title}>System Architecture & Impact</h2>
                <p style={{ color: 'var(--text-secondary)' }}>How I engineer value, handle risk, and operationalize trust.</p>
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

                        {/* If there is a deep dive, show that PROMINENTLY */}
                        {job.systemDeepDive ? (
                            <div className={styles.deepDive}>
                                <h4 className={styles.deepDiveTitle}>{job.systemDeepDive.title}</h4>
                                <div className={styles.deepDiveContent}>
                                    {job.systemDeepDive.content.map((block, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{
                                            __html: block.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--primary)">$1</strong>')
                                        }} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className={styles.description}>{job.description}</p>
                        )}

                        {!job.systemDeepDive && (
                            <ul className={styles.achievements}>
                                {job.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
