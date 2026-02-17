import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function CajaMoreliaExperience(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <div id={"cajaMoreliaExperience"}>
            <button onClick={() => navigate('/')} className="language-btn" style={{marginBottom: '20px'}}>{t('back')}</button>
            <h1>Koralat</h1>
            <p><strong>{t('cajaMoreliaExperienceTitle')}</strong></p>
            <p style={{whiteSpace: 'pre-line'}}>{t('cajaMoreliaExperienceDescription')}</p>
        </div>
    );
}

export default CajaMoreliaExperience;
