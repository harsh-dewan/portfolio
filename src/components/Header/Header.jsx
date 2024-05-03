import './header-style.css'

function Header() 
{
    return (
        <>
        <div className='header-container'>
            <h1 className='header-heading'>HARSH DEWAN</h1>
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