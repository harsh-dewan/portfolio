import './experience-style.css'

function Experience() {
    return(
        <>
        <div className='experience'>
            <h1 className='experience-title'>Experience</h1>
            <div className='experience-details'>
                <div className='experience-amdocs'>
                    <p>Software Engineer</p>
                    <p>Amdocs, Pune, India</p>
                    <p>September 2020 - June 2023</p>
                    <div className='experience-duties'>
                        <p>Core Technologies: C, Java, REST and SOAP APIs, Oracle</p>
                        <p>Recruited in Amdocs Document Designing team, responsible for implementing software solution to generate bills and contract
                        documents for clients in the telecom industry</p>
                        <p>Corresponded with clients, the solution team, and enhanced designed documents to define solution requirements</p>
                        <p>Collaborated with fellow developers and testing team members to design and construct robust solutions to meet client requirements for
                        functionality, scalability, and performance</p>
                        <p>Participated in sprint planning, daily stand-ups, and mentored new employees</p>
                    </div>
                </div>
                <div className='experience-juniper'>
                    <p>Software Engineering Intern</p>
                    <p>Juniper Networks, Bangalore, India</p>
                    <p>January 2020 - June 2020</p>
                    <div className='experience-duties'>
                        <p>Core Technologies: C, SVN, TCP/IP</p>
                        <p>Employed in Packet Forwarding team, contributed to a new feature of displaying IPSG dropped packets at VTY level</p>
                        <p>Introduced 4 new commands, 2 each for IPv4 and IPv6 for showing and clearing IPSG packets</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Experience;