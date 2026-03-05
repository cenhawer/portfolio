import React from 'react';
import './CSS/Skills.css';
import { useTranslation } from 'react-i18next';

const ICON = (id) => `https://skillicons.dev/icons?i=${id}&theme=dark`;

// icon: skillicons.dev id — null means text-only chip
const skillCategories = [
    {
        key: 'skillCat1',
        color: 'blue',
        skills: [
            { name: '.NET 6/8/9', icon: 'dotnet' },
            { name: 'C#',         icon: 'cs'     },
            { name: 'ASP.NET Core', icon: null },
            { name: 'Web API',    icon: null },
            { name: 'MediatR',    icon: null },
            { name: 'EF Core',    icon: null },
        ],
    },
    {
        key: 'skillCat2',
        color: 'indigo',
        skills: [
            { name: 'Hexagonal',    icon: null },
            { name: 'DDD',          icon: null },
            { name: 'CQRS',         icon: null },
            { name: 'Microservicios', icon: null },
            { name: 'Event-Driven', icon: null },
        ],
    },
    {
        key: 'skillCat3',
        color: 'amber',
        skills: [
            { name: 'Kafka',      icon: 'kafka'    },
            { name: 'RabbitMQ',   icon: 'rabbitmq' },
            { name: 'Amazon SQS', icon: null },
        ],
    },
    {
        key: 'skillCat4',
        color: 'green',
        skills: [
            { name: 'SQL Server',  icon: null       },
            { name: 'PostgreSQL',  icon: 'postgres' },
            { name: 'MySQL',       icon: 'mysql'    },
            { name: 'Oracle',      icon: null       },
            { name: 'Redis',       icon: 'redis'    },
        ],
    },
    {
        key: 'skillCat5',
        color: 'purple',
        skills: [
            { name: 'Docker',       icon: 'docker' },
            { name: 'Azure DevOps', icon: 'azure'  },
            { name: 'Git',          icon: 'git'    },
            { name: 'CI/CD',        icon: null },
            { name: 'Vault',        icon: null },
            { name: 'MinIO',        icon: null },
            { name: 'Keycloak',     icon: null },
        ],
    },
    {
        key: 'skillCat6',
        color: 'teal',
        skills: [
            { name: 'Angular',    icon: 'angular' },
            { name: 'React',      icon: 'react'   },
            { name: 'TypeScript', icon: 'ts'      },
            { name: 'Vue',        icon: 'vue'     },
        ],
    },
];

function Skills() {
    const { t } = useTranslation();
    return (
        <div className="section">
            <h2 className="section-title">{t('skillsTitle')}</h2>
            <div className="skills-grid">
                {skillCategories.map((cat) => (
                    <div key={cat.key} className={`skill-card skill-card--${cat.color}`}>
                        <span className="skill-category">{t(cat.key)}</span>
                        <div className="skill-items">
                            {cat.skills.map((s) =>
                                s.icon ? (
                                    <div key={s.name} className="skill-item-icon">
                                        <img
                                            src={ICON(s.icon)}
                                            alt={s.name}
                                            className="skill-icon-img"
                                        />
                                        <span className="skill-icon-label">{s.name}</span>
                                    </div>
                                ) : (
                                    <span key={s.name} className="skill-tag">{s.name}</span>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
