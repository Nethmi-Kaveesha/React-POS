const AboutPage = () => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '3rem auto',
            padding: '2rem 3rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Segoe UI, sans-serif',
            textAlign: 'left'
        }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>About Easy POS</h1>
            <p style={{ color: '#34495e', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Easy POS</strong> is a powerful yet user-friendly point-of-sale system tailored for small and medium businesses.
                It enables seamless management of sales, inventory, and customer data with a simple and intuitive interface.
            </p>
            <ul style={{ marginTop: '1.5rem', paddingLeft: '1.2rem', color: '#444', lineHeight: '1.6' }}>
                <li>✔ Fast billing and transaction processing</li>
                <li>✔ Real-time inventory tracking</li>
                <li>✔ Daily sales and reports overview</li>
                <li>✔ Simple user experience for staff and admin</li>
            </ul>
            <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#7f8c8d' }}>
                Version 1.0.0 — © 2025 Easy POS Solutions
            </p>
        </div>
    );
};

export default AboutPage;
