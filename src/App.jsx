import './CSS/App.css';
import ProfileSection from './ProfileSection';
import profilePic from './images/image003.jpg';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Cursos';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={
                    <>
                        <header className="App-header">
                            <div className="lang-toggle">
                                <button
                                    className={`lang-opt ${i18n.language === 'es' ? 'lang-opt--active' : ''}`}
                                    onClick={() => changeLanguage('es')}
                                >ES</button>
                                <button
                                    className={`lang-opt ${i18n.language === 'en' ? 'lang-opt--active' : ''}`}
                                    onClick={() => changeLanguage('en')}
                                >EN</button>
                            </div>
                            <img src={profilePic} alt={t('profileAltText')} className="profile-pic" />
                            <h1>{t('nameProfile')}</h1>
                            <p className="hero-title">{t('titleProfile')}</p>
                            <p className="hero-location">📍 {t('location')}</p>
                            <div className="hero-links">
                                <a
                                    className="hero-link"
                                    href="https://linkedin.com/in/cenhawer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    in LinkedIn
                                </a>
                                <a
                                    className="hero-link"
                                    href="https://github.com/cenhawer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ⌥ GitHub
                                </a>
                                <a
                                    className="hero-link"
                                    href="mailto:krlosoul0@gmail.com"
                                >
                                    ✉ krlosoul0@gmail.com
                                </a>
                            </div>
                        </header>

                        <div className="App">
                            <ProfileSection />
                            <Skills />
                            <WorkExperience />
                            <Projects />
                            <Education />
                            <Contact />
                        </div>
                    </>
                } />
            </Routes>
        </Router>
    );
}

export default App;
