import React from 'react';
import './CSS/ProfileSection.css';
import { useTranslation } from 'react-i18next';

const ProfileSection = () => {
    const { t } = useTranslation();

    const metrics = [
        { value: t('metric1Value'), label: t('metric1Label'), color: 'blue' },
        { value: t('metric2Value'), label: t('metric2Label'), color: 'blue' },
        { value: t('metric3Value'), label: t('metric3Label'), color: 'green' },
        { value: t('metric4Value'), label: t('metric4Label'), color: 'green' },
    ];

    const philosophy = [
        { icon: '✦', key: 'phil1' },
        { icon: '◎', key: 'phil2' },
        { icon: '⟳', key: 'phil3' },
        { icon: '◈', key: 'phil4' },
    ];

    return (
        <div className="section profile-section">
            <h2 className="section-title">{t('profileProfessional')}</h2>
            <p className="profile-summary">{t('profileSummary')}</p>
            <p className="profile-summary">{t('profileSummary2')}</p>
            <div className="metrics-grid">
                {metrics.map((m, i) => (
                    <div key={i} className={`metric-card metric-card--${m.color}`}>
                        <span className="metric-value">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                    </div>
                ))}
            </div>
            <h3 className="phil-title">{t('philTitle')}</h3>
            <div className="phil-grid">
                {philosophy.map((p) => (
                    <div key={p.key} className="phil-card">
                        <span className="phil-icon">{p.icon}</span>
                        <span className="phil-name">{t(`${p.key}Title`)}</span>
                        <span className="phil-desc">{t(`${p.key}Desc`)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSection;
