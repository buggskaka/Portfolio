
export default function Footer() {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Onyedikachi Nwabugwu</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Product Architect & Strategist</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="mailto:onyedikachinwabugwu.k@gmail.com" style={{ color: 'var(--text-secondary)' }}>Email</a>
                    <a href="https://linkedin.com/in/onyedikachinwabugwu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
