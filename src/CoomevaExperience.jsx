import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function CoomevaExperience(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div id={"coomevaExperience"}>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>{t('back')}</button>
            <h1>Coomeva Medicina Prepagada</h1>
            <p><strong>{t('coomevaExperienceTitle')}</strong></p>
            <p>{t('coomevaExperienceDescription')}</p>
        </div>
    );
}

export default CoomevaExperience;