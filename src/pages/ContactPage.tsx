const ContactPage = () => {
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
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>Contact Us</h1>
            <p style={{ fontSize: '1.1rem', color: '#34495e', lineHeight: '1.8' }}>
                Need help or have questions about Easy POS? We're here to assist you.
                Reach out to us using the details below or send us a quick message.
            </p>

            <div style={{ marginTop: '2rem', lineHeight: '1.8', color: '#444' }}>
                <p><strong>Email:</strong> support@easypos.com</p>
                <p><strong>Phone:</strong> +1 (234) 567-8901</p>
                <p><strong>Address:</strong> 123 POS Street, Suite 456, Business City, BC 78901</p>
                <p><strong>Support Hours:</strong> Mon - Fri, 9:00 AM – 6:00 PM</p>
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#7f8c8d' }}>
                We'll respond to all inquiries within 24 hours. Thank you for choosing Easy POS!
            </p>
        </div>
    );
};

export default ContactPage;
