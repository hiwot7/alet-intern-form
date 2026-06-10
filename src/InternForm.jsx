import React, { useState } from 'react';
import companyLogo from './logo.png'; // Imports your logo asset from the src folder

const EthiopianUniversities = [
    "Addis Ababa University",
    "Hawassa University",
    "Bahir Dar University",
    "Jimma University",
    "Mekelle University",
    "Adama Science and Technology University",
    "Arba Minch University",
    "Wollo University",
    "Other"
];

export default function InternRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        university: '',
        otherUniversity: '',
        yearOfStudy: '',
        gpa: '',
        githubProfile: '',
        skills: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('React Form Data Submitted Successfully:', formData);
        setSubmitted(true);
    };

    // Coordinated Classic Theme Variables
    const BRAND_COLOR = '#1e4620';       // Premium Deep Forest Green from your logo
    const BRAND_HOVER = '#132e14';       // Darker accent tone for button hover
    const BRAND_GLOW = 'rgba(30, 70, 32, 0.12)'; // Subtle ring aura on active inputs
    const TEXT_MUTED = '#64748b';        // Premium slate gray for readable descriptions

    const styles = {
        // Webpage Wrapper to stretch across the entire screen and kill the "raw widget" look
        pageWrapper: {
            minHeight: '100vh',
            width: '100%',
            backgroundColor: '#f8fafc',
            backgroundImage: 'linear-gradient(135deg, #f1f5f9 0%, #f8fafc 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            boxSizing: 'border-box',
        },
        container: {
            width: '100%',
            maxWidth: '680px',
            padding: '50px 45px', // Extra breathing room inside the container
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0,0,0,0.01)',
            fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            border: '1px solid #e2e8f0',
            boxSizing: 'border-box',
        },
        header: {
            textAlign: 'center',
            marginBottom: '40px',
        },
        logo: {
            height: '42px', // Ultra-sleek corporate logo sizing
            width: 'auto',
            marginBottom: '20px',
            objectFit: 'contain',
        },
        subTitle: {
            fontSize: '20px', // More prominent, lively text
            color: BRAND_COLOR,
            fontWeight: '700',
            letterSpacing: '-0.025em', // Premium modern tight font kerning
            margin: '0 0 10px 0',
        },
        description: {
            fontSize: '14px',
            color: TEXT_MUTED,
            lineHeight: '1.5',
            margin: '0',
        },
        formGroup: {
            marginBottom: '28px', // Enhanced breathing space between fields
            textAlign: 'left',
        },
        rowContainer: {
            display: 'flex',
            gap: '24px', // Standardized spatial separation
            marginBottom: '28px',
            flexWrap: 'wrap',
            width: '100%',
        },
        rowField: {
            flex: '1 1 calc(50% - 12px)', // Forces true mathematical grid alignment
            minWidth: '260px',
            boxSizing: 'border-box',
        },
        label: {
            display: 'block',
            fontSize: '13px',
            fontWeight: '600',
            color: '#334155', // Charcoal slate for premium readability
            marginBottom: '8px',
            letterSpacing: '0.025em', // Breathes life into uppercase/bold metadata labels
            textTransform: 'uppercase',
        },
        input: (fieldName) => ({
            width: '100%',
            padding: '13px 16px',
            fontSize: '15px',
            color: '#0f172a',
            backgroundColor: '#ffffff',
            border: `1px solid ${focusedField === fieldName ? BRAND_COLOR : '#cbd5e1'}`,
            borderRadius: '8px',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: focusedField === fieldName ? `0 0 0 4px ${BRAND_GLOW}` : 'none',
        }),
        button: {
            width: '100%',
            backgroundColor: BRAND_COLOR,
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: '600',
            letterSpacing: '0.01em',
            padding: '14px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            marginTop: '12px',
            boxSizing: 'border-box',
            boxShadow: '0 4px 12px rgba(30, 70, 32, 0.12)',
        },
        successContainer: {
            width: '100%',
            maxWidth: '500px',
            padding: '50px 40px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            border: '1px solid #e2e8f0',
        }
    };

    if (submitted) {
        return (
            <div style={styles.pageWrapper}>
                <div style={styles.successContainer}>
                    <img src={companyLogo} alt="Alet Logo" style={{ height: '38px', marginBottom: '24px', objectFit: 'contain' }} />
                    <h2 style={{ color: BRAND_COLOR, margin: '0 0 12px 0', fontSize: '24px', fontWeight: '700' }}>Application Received</h2>
                    <p style={{ color: TEXT_MUTED, fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        Your application has been successfully submitted to <strong>Alet Technology PLC</strong>. Our engineering team will review your profile and reach out shortly.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                {/* Brand Header */}
                <div style={styles.header}>
                    <img src={companyLogo} alt="Alet Technology PLC" style={styles.logo} />
                    <h1 style={styles.subTitle}>Software Engineering Internship Application</h1>
                    <p style={styles.description}>Join the engineering ecosystem at Alet Technology. Open for software architecture candidates across Ethiopian universities.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('fullName')}
                            onBlur={() => setFocusedField('')}
                            placeholder="E.g., Abebe Kebede"
                            style={styles.input('fullName')}
                        />
                    </div>

                    {/* Email & Phone Parallel Row */}
                    <div style={styles.rowContainer}>
                        <div style={styles.rowField}>
                            <label style={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField('')}
                                placeholder="name@example.com"
                                style={styles.input('email')}
                            />
                        </div>
                        <div style={styles.rowField}>
                            <label style={styles.label}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField('')}
                                placeholder="0911XXXXXX"
                                style={styles.input('phone')}
                            />
                        </div>
                    </div>

                    {/* University Selector */}
                    <div style={styles.formGroup}>
                        <label style={styles.label}>University</label>
                        <select
                            name="university"
                            required
                            value={formData.university}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('university')}
                            onBlur={() => setFocusedField('')}
                            style={styles.input('university')}
                        >
                            <option value="">-- Select University --</option>
                            {EthiopianUniversities.map((uni, idx) => (
                                <option key={idx} value={uni}>{uni}</option>
                            ))}
                        </select>
                    </div>

                    {/* Conditional Field if "Other" university picked */}
                    {formData.university === "Other" && (
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Please specify your University</label>
                            <input
                                type="text"
                                name="otherUniversity"
                                required
                                value={formData.otherUniversity}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('otherUniversity')}
                                onBlur={() => setFocusedField('')}
                                placeholder="Enter university name"
                                style={styles.input('otherUniversity')}
                            />
                        </div>
                    )}

                    {/* Year of Study & GPA Parallel Row */}
                    <div style={styles.rowContainer}>
                        <div style={styles.rowField}>
                            <label style={styles.label}>Year of Study</label>
                            <select
                                name="yearOfStudy"
                                required
                                value={formData.yearOfStudy}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('yearOfStudy')}
                                onBlur={() => setFocusedField('')}
                                style={styles.input('yearOfStudy')}
                            >
                                <option value="">-- Select Year --</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                                <option value="5th Year">5th Year (Graduating Class)</option>
                            </select>
                        </div>
                        <div style={styles.rowField}>
                            <label style={styles.label}>Current Cumulative GPA</label>
                            <input
                                type="number"
                                name="gpa"
                                required
                                step="0.01"
                                min="2.00"
                                max="4.00"
                                value={formData.gpa}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('gpa')}
                                onBlur={() => setFocusedField('')}
                                placeholder="E.g., 3.65"
                                style={styles.input('gpa')}
                            />
                        </div>
                    </div>

                    {/* GitHub / Portfolio URL */}
                    <div style={styles.formGroup}>
                        <label style={styles.label}>GitHub or Portfolio URL</label>
                        <input
                            type="url"
                            name="githubProfile"
                            value={formData.githubProfile}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('githubProfile')}
                            onBlur={() => setFocusedField('')}
                            placeholder="https://github.com/yourusername"
                            style={styles.input('githubProfile')}
                        />
                    </div>

                    {/* Preferred Tech Stack Languages */}
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Primary Programming Languages / Frameworks</label>
                        <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('skills')}
                            onBlur={() => setFocusedField('')}
                            placeholder="E.g., React, Node.js, Python, SQL"
                            style={styles.input('skills')}
                        />
                    </div>

                    {/* Premium Aligned Action Button */}
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseOver={(e) => e.target.style.backgroundColor = BRAND_HOVER}
                        onMouseOut={(e) => e.target.style.backgroundColor = BRAND_COLOR}
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}