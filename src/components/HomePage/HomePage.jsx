import './homepage-style.css'
import Header from '../Header/Header.jsx'
import Profile from '../Profile/Profile.jsx'
import Experience from '../Experience/Experience.jsx'
import Skills  from '../Skills/Skills.jsx'
import Projects from '../Projects/Projects.jsx'
import Education from '../Education/Education.jsx'
import Contact from '../Contact/Contact.jsx'

function HomePage() {

    return(
        <>
            <Header />
            <Profile />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </>
    );

}
export default HomePage;