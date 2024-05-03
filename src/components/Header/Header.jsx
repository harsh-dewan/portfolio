import './header-style.css'

function Header() 
{
    return (
        <>
        <div className='header-container'>
            <div className='header-heading'>
                <h1>HARSH DEWAN</h1>
            </div>
            <div className='header-navbar'>
                <ul>
                    <li>About</li>
                    <li>Work Experience</li>
                    <li>Projects</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Header;