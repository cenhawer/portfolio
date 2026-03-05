import React from 'react';
import './CSS/Cursos.css';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    const contactItems = [
        {
            icon: '✉',
            label: 'Email',
            value: t('contactEmail'),
            href: `mailto:${t('contactEmail')}`,
        },
        {
            icon: '☎',
            label: 'Phone',
            value: t('contactPhone'),
            href: `tel:${t('contactPhone').replace(/\s/g, '')}`,
        },
        {
            icon: 'in',
            label: 'LinkedIn',
            value: t('contactLinkedIn'),
            href: 'https://linkedin.com/in/cenhawer',
        },
        {
            icon: '⌥',
            label: 'GitHub',
            value: t('contactGitHub'),
            href: 'https://github.com/cenhawer',
        },
    ];

    return (
        <div className="section contact-section">
            <h2 className="section-title">{t('contactTitle')}</h2>
            <div className="contact-grid">
                {contactItems.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className="contact-card"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                        <span className="contact-icon">{item.icon}</span>
                        <div className="contact-info">
                            <span className="contact-label">{item.label}</span>
                            <span className="contact-value">{item.value}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Contact;
