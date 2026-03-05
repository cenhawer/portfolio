import React from 'react';
import './CSS/Education.css';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();
    return (
        <div className="section">
            <h2 className="section-title">{t('educationTitle')}</h2>
            <div className="edu-row">
                <div className="edu-card">
                    <div className="edu-icon">◎</div>
                    <div className="edu-info">
                        <span className="edu-degree">{t('edu1Degree')}</span>
                        <span className="edu-institution">{t('edu1Institution')}</span>
                        <span className="edu-date">{t('edu1Date')}</span>
                    </div>
                </div>
                <div className="lang-card">
                    <h3 className="lang-title">{t('languagesTitle')}</h3>
                    <div className="lang-list">
                        <div className="lang-item">
                            <span className="lang-name">{t('lang1')}</span>
                            <span className="lang-level lang-level--native">{t('lang1Level')}</span>
                        </div>
                        <div className="lang-item">
                            <span className="lang-name">{t('lang2')}</span>
                            <span className="lang-level lang-level--intermediate">{t('lang2Level')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
