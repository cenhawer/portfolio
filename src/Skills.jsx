import { useTranslation } from 'react-i18next';
import './CSS/Skills.css';

// Servidor
import aspnetcoreIcon from './images/skills/aspnetcore.svg';
import csharpIcon from './images/skills/csharp.svg';
import dotnetIcon from './images/skills/dotnet.svg';
import efcoreIcon from './images/skills/efcore.svg';
import nugetIcon from './images/skills/nuget.svg';
import swaggerIcon from './images/skills/swagger.svg';

// Arquitectura
import cqrsIcon from './images/skills/cqrs.svg';
import dddIcon from './images/skills/ddd.svg';
import eventdrivenIcon from './images/skills/eventdriven.svg';
import hexagonalIcon from './images/skills/hexagonal.svg';
import microservicesIcon from './images/skills/microservices.svg';

// Mensajería
import awsIcon from './images/skills/aws.svg';
import kafkaIcon from './images/skills/kafka.svg';
import rabbitmqIcon from './images/skills/rabbitmq.svg';

// Bases de Datos
import mysqlIcon from './images/skills/mysql.svg';
import oracleIcon from './images/skills/oracle.svg';
import postgresqlIcon from './images/skills/postgresql.svg';
import redisIcon from './images/skills/redis.svg';
import sqlserverIcon from './images/skills/sqlserver.svg';

// Infraestructura
import azureIcon from './images/skills/azure.svg';
import dockerIcon from './images/skills/docker.svg';
import gitIcon from './images/skills/git.svg';
import githubactionsIcon from './images/skills/githubactions.svg';
import keycloakIcon from './images/skills/keycloak.svg';
import minioIcon from './images/skills/minio.svg';
import vaultIcon from './images/skills/vault.svg';

// Presentación
import angularIcon from './images/skills/angular.svg';
import reactIcon from './images/skills/react.svg';
import typescriptIcon from './images/skills/typescript.svg';
import vueIcon from './images/skills/vue.svg';

const skillCategories = [
    {
        key: 'skillCat1',
        color: 'blue',
        skills: [
            { name: '.NET 6/8/9', icon: dotnetIcon },
            { name: 'C#', icon: csharpIcon },
            { name: 'ASP.NET Core', icon: aspnetcoreIcon },
            { name: 'Web API', icon: swaggerIcon },
            { name: 'MediatR', icon: nugetIcon },
            { name: 'EF Core', icon: efcoreIcon },
        ],
    },
    {
        key: 'skillCat2',
        color: 'indigo',
        skills: [
            { name: 'Hexagonal', icon: hexagonalIcon },
            { name: 'DDD', icon: dddIcon },
            { name: 'CQRS', icon: cqrsIcon },
            { name: 'Microservicios', icon: microservicesIcon },
            { name: 'Event-Driven', icon: eventdrivenIcon },
        ],
    },
    {
        key: 'skillCat3',
        color: 'amber',
        skills: [
            { name: 'Kafka', icon: kafkaIcon },
            { name: 'RabbitMQ', icon: rabbitmqIcon },
            { name: 'Amazon SQS', icon: awsIcon },
        ],
    },
    {
        key: 'skillCat4',
        color: 'green',
        skills: [
            { name: 'SQL Server', icon: sqlserverIcon },
            { name: 'PostgreSQL', icon: postgresqlIcon },
            { name: 'MySQL', icon: mysqlIcon },
            { name: 'Oracle', icon: oracleIcon },
            { name: 'Redis', icon: redisIcon },
        ],
    },
    {
        key: 'skillCat5',
        color: 'purple',
        skills: [
            { name: 'Docker', icon: dockerIcon },
            { name: 'Azure DevOps', icon: azureIcon },
            { name: 'Git', icon: gitIcon },
            { name: 'CI/CD', icon: githubactionsIcon },
            { name: 'Vault', icon: vaultIcon },
            { name: 'MinIO', icon: minioIcon },
            { name: 'Keycloak', icon: keycloakIcon },
        ],
    },
    {
        key: 'skillCat6',
        color: 'teal',
        skills: [
            { name: 'Angular', icon: angularIcon },
            { name: 'React', icon: reactIcon },
            { name: 'TypeScript', icon: typescriptIcon },
            { name: 'Vue', icon: vueIcon },
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
                            {cat.skills.map((s) => (
                                <div key={s.name} className="skill-item-icon">
                                    <img
                                        src={s.icon}
                                        alt={s.name}
                                        className="skill-icon-img"
                                    />
                                    <span className="skill-icon-label">{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
