import './contact-style.css'
function Contact() {
    return(
        <>
        <div className="contact">
            <div className='contact-title'>
               <h1>Contact</h1>
            </div>
            <div className='contact-content'>
                <div className="contact-name-heading">
                    <h4>HARSH DEWAN</h4>
                </div>
                <div className="contact-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#profile">About</a></li>
                        <li><a href="#sklls">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                    </ul>
                </div>
                <div className="contact-social-link">
                    <ul>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">Github</a></li>
                        <li><a href="">Medium</a></li>
                    </ul>
                </div>
                <div className="contact-last-notes">
                    <p>Made by Harsh Dewan</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Contact;