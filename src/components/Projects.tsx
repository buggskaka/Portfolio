import styles from './Projects.module.css';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>The Builder&apos;s Lab</h2>
                <p className={styles.intro}>
                    I build to prove concepts. These are not just apps; they are market experiments in Fairness, Trust, and Liquidity.
                </p>

                <div className={styles.grid}>
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className={`${styles.card} ${project.caseStudy ? styles.expandedCard : ''}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.projectTitle}>
                                    {project.title}
                                    <span className={styles.role}>{project.role}</span>
                                </div>
                            </div>

                            <p className={styles.description}>{project.description}</p>

                            {project.caseStudy && (
                                <div className={styles.caseStudy}>
                                    <div className={styles.csBlock}>
                                        <span className={styles.csLabel}>The Context</span>
                                        <p>{project.caseStudy.context}</p>
                                    </div>
                                    <div className={styles.csBlock}>
                                        <span className={styles.csLabel}>The Strategy</span>
                                        <p>{project.caseStudy.strategy}</p>
                                    </div>
                                </div>
                            )}

                            {/* Add System Deep Dive for Projects too */}
                            {project.systemDeepDive && (
                                <div className={styles.deepDive}>
                                    <h4 className={styles.deepDiveTitle}>{project.systemDeepDive.title}</h4>
                                    <div className={styles.deepDiveContent}>
                                        {project.systemDeepDive.content.map((block, i) => (
                                            <p key={i} dangerouslySetInnerHTML={{
                                                __html: block.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--primary)">$1</strong>')
                                            }} />
                                        ))}
                                    </div>
                                </div>
                            )}

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
