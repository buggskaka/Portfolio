import { portfolioData } from '@/data/portfolio';

export default function Skills() {
    const { skills } = portfolioData;

    const sectionStyle = {
        padding: '6rem 0',
        background: 'var(--background)'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem'
    };

    const categoryTitleStyle = {
        fontSize: '0.875rem',
        color: 'var(--primary)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.1em',
        marginBottom: '1.5rem',
        display: 'block'
    };

    const listStyle = {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.75rem'
    };

    const itemStyle = {
        fontSize: '1.125rem',
        color: 'var(--foreground)'
    };

    return (
        <section className="container" style={sectionStyle}>
            <div style={gridStyle}>
                <div>
                    <span style={categoryTitleStyle}>Strategy</span>
                    <ul style={listStyle}>
                        {skills.strategy.map((s, i) => <li key={i} style={itemStyle}>{s}</li>)}
                    </ul>
                </div>
                <div>
                    <span style={categoryTitleStyle}>Operations</span>
                    <ul style={listStyle}>
                        {skills.operations.map((s, i) => <li key={i} style={itemStyle}>{s}</li>)}
                    </ul>
                </div>
                <div>
                    <span style={categoryTitleStyle}>Technical Tools</span>
                    <ul style={listStyle}>
                        {skills.tools.map((s, i) => <li key={i} style={itemStyle}>{s}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
}
