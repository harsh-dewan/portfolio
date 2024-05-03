import './education-style.css';

function Education() {
    return(
        <>
        <div className="education">
            <h1 className='education-heading'>Education</h1>
            <div className='education-details'>
                <div className='education-masters'>
                    <p className='education-course'>Master of Applied Computing</p>
                    <p className='education-university'>University of Windsor</p>
                    <p className='education-duration'>Spetember 2023 -  December 2024</p>
                </div>
                <div className='education-bachelors'>
                    <p className='education-course'>Bachelor of Computer Engineering</p>
                    <p className='education-university'>Thapar Institute of Engineering and Technology</p>
                    <p className='education-duration'>July 2016 -  July 2020</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Education;