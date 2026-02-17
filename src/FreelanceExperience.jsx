import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function FreelanceExperience(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>{t('back')}</button>
            <h1>Freelance Developer</h1>
            <p><strong>{t('freelanceExperienceTitle')}</strong></p>
            <p>
                {t('freelanceExperienceDescription')}
            </p>
        </div>
    );
}

export default FreelanceExperience;
