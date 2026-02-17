import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function SetiExperience(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div id={"setiExperience"}>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>{t('back')}</button>
            <h1>SETI (Cliente: Bancolombia)</h1>
            <p><strong>{t('setiExperienceTitle')}</strong></p>
            <p style={{whiteSpace: 'pre-line'}}>{t('setiExperienceDescription')}</p>
        </div>
    );
}

export default SetiExperience;
