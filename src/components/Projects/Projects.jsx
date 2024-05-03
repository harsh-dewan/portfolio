import './projects-style.css'

function Projects() {
    return(
        <>
        <div className='projects'>
            <h1 className='project-title'>Projects</h1>
            <div className='project-container'>
                <div className='project-details'>
                    <p>Custom Command Client-Server System Jan 2024 – Apr 2024</p>
                    <p>Technology: C, Socket Programming</p>
                    <p>Developed a robust client-server system using socket programming for seamless communication, with customized commands for efficient interaction</p>
                    <p>Demonstrated strong problem-solving skills and collaboration in implementing and deploying a scalable, reliable system with error handling mechanisms</p>
                </div>
                <div className='project-details'>
                    <p>Hotel Ranking System Sep 2023 – Dec 2023</p>
                    <p>Technology: Java, JSoup, Selenium</p>
                    <p>Created a hotel recommendation system empowering users to evaluate options based on amenities, location, and public reviews, enhancing travel decisions</p>
                    <p>Developed a engaging dashboard by parsing 3 sites to show results and included features such as spell checking and the most searched hotels</p>
                </div>
                <div className='project-details'>
                    <p>Regression Analysis Tool Jan 2023 – Jun 2023</p>
                    <p>Technology: Python, MongoDB</p>
                    <p>Wrote a solution to automate multiple test cases, primarily used to reduce the time required for regression testing</p>
                    <p>Achieved a 40% enhancement in project delivery by reducing time spent writing regression test cases</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Projects;