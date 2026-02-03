import styles from './Projects.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>The Builder&apos;s Lab</h2>
                <p className={styles.intro}>
                    I don&apos;t just manage; I build to understand. These personal projects are my playground for testing market theories and operational logic.
                </p>

                <div className={styles.grid}>
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.projectTitle}>
                                    {project.title}
                                    <span className={styles.role}>{project.role}</span>
                                </div>
                            </div>

                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.impact.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <div className={styles.links}>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        Live Demo ↗
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        GitHub ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
