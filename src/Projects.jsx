import React from 'react';
import './CSS/Projects.css';
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            name: t('proj1Name'),
            sector: t('proj1Sector'),
            bullets: [t('proj1B1'), t('proj1B2')],
            color: 'blue',
        },
        {
            name: t('proj2Name'),
            sector: t('proj2Sector'),
            bullets: [t('proj2B1'), t('proj2B2')],
            color: 'amber',
        },
    ];

    return (
        <div className="section">
            <h2 className="section-title">{t('projectsTitle')}</h2>
            <div className="projects-grid">
                {projects.map((proj, i) => (
                    <div key={i} className={`project-card project-card--${proj.color}`}>
                        <div className="project-card-header">
                            <span className="project-name">{proj.name}</span>
                            <span className="project-sector">{proj.sector}</span>
                        </div>
                        <ul className="project-bullets">
                            {proj.bullets.map((b, bi) => (
                                <li key={bi}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
