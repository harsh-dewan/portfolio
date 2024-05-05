import './projects-style.css'

function Projects() {
    return(
        <>
        <div className='projects'>
           <div  className='project-title'>
                <h1>Projects</h1>
           </div>
            <div className='project-container'>
                <div className='project-details'>
                    <p className='project-heading'>Custom Command Client-Server System (Jan 2024 - Apr 2024)</p>
                    <p className='project-tech'>Technology: C, Socket Programming</p>
                    <p className='project-description'>Developed a robust client-server system using socket programming for seamless communication, with customized commands for efficient interaction</p>
                    <p className='project-description'>Demonstrated strong problem-solving skills and collaboration in implementing and deploying a scalable, reliable system with error handling mechanisms</p>
                    <a className='github-link' href="">Github</a>
                </div>
                <div className='project-details'>
                    <p className='project-heading'>Hotel Ranking System (Sep 2023 - Dec 2023)</p>
                    <p className='project-tech'>Technology: Java, JSoup, Selenium</p>
                    <p className='project-description'>Created a hotel recommendation system empowering users to evaluate options based on amenities, location, and public reviews, enhancing travel decisions</p>
                    <p className='project-description'>Developed a engaging dashboard by parsing 3 sites to show results and included features such as spell checking and the most searched hotels</p>
                    <a className='github-link' href="">Github</a>
                </div>
                <div className='project-details'>
                    <p className='project-heading'>Regression Analysis Tool (Jan 2023 - Jun 2023)</p>
                    <p className='project-tech'>Technology: Python, MongoDB</p>
                    <p className='project-description'>Wrote a solution to automate multiple test cases, primarily used to reduce the time required for regression testing</p>
                    <p className='project-description'> Achieved a 40% enhancement in project delivery by reducing time spent writing regression test cases</p>
                    <a className='github-link' href="">Github</a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Projects;