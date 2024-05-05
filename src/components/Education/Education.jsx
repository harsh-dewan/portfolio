import './education-style.css';

function Education() {
    return(
        <>
        <div className="education-container">
            <div className='education-heading'>
                <h1>Education</h1>
            </div>
            <div className='education-details'>
                <div className='education'>
                    <p className='education-course'>Master of Applied Computing</p>
                    <p className='education-university'>University of Windsor</p>
                    <p className='education-duration'>September 2023 -  December 2024</p>
                </div>
                <div className='education'>
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

/*
<div className='education'>
    <p className='education-course'>Bachelor of Computer Engineering</p>
    <p className='education-university'>Thapar Institute of Engineering and Technology</p>
    <p className='education-duration'>July 2016 -  July 2020</p>
</div>
*/