import React from 'react';
import './CSS/WorkExperience.css';
import { useTranslation } from 'react-i18next';

function WorkExperience() {
    const { t } = useTranslation();

    const experiences = [
        {
            company: t('exp1Company'),
            role: t('exp1Role'),
            date: t('exp1Date'),
            isCurrent: true,
            bullets: [t('exp1B1'), t('exp1B2'), t('exp1B3'), t('exp1B4'), t('exp1B5')],
        },
        {
            company: t('exp2Company'),
            role: t('exp2Role'),
            date: t('exp2Date'),
            isCurrent: false,
            bullets: [t('exp2B1'), t('exp2B2'), t('exp2B3')],
        },
        {
            company: t('exp3Company'),
            role: t('exp3Role'),
            date: t('exp3Date'),
            isCurrent: false,
            bullets: [t('exp3B1'), t('exp3B2')],
        },
        {
            company: t('exp4Company'),
            role: t('exp4Role'),
            date: t('exp4Date'),
            isCurrent: false,
            bullets: [t('exp4B1'), t('exp4B2')],
        },
        {
            company: t('exp5Company'),
            role: t('exp5Role'),
            date: t('exp5Date'),
            isCurrent: false,
            bullets: [t('exp5B1'), t('exp5B2')],
        },
        {
            company: t('exp6Company'),
            role: t('exp6Role'),
            date: t('exp6Date'),
            isCurrent: false,
            subCompanies: t('exp6Companies'),
            bullets: [t('exp6B1'), t('exp6B2'), t('exp6B3'), t('exp6B4'), t('exp6B5')],
        },
    ];

    return (
        <div className="section">
            <h2 className="section-title">{t('workExperienceTitle')}</h2>
            <div className="timeline">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="timeline-item">
                        <div className="timeline-indicator">
                            <div className={`timeline-dot ${exp.isCurrent ? 'timeline-dot--current' : ''}`} />
                            {idx < experiences.length - 1 && <div className="timeline-line" />}
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div className="timeline-company-info">
                                    <span className="timeline-company">{exp.company}</span>
                                    <span className="timeline-role">{exp.role}</span>
                                    {exp.subCompanies && (
                                        <span className="timeline-sub-companies">{exp.subCompanies}</span>
                                    )}
                                </div>
                                <div className="timeline-date-wrap">
                                    <span className="timeline-date">{exp.date}</span>
                                    {exp.isCurrent && (
                                        <span className="timeline-badge">{t('currentBadge')}</span>
                                    )}
                                </div>
                            </div>
                            <ul className="timeline-bullets">
                                {exp.bullets.map((b, bi) => (
                                    <li key={bi}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
