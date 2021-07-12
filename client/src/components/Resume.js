import pdf from '../assets/Resume.pdf'

function Resume(){
    
    return(
        <section className="d-flex flex-column align-items-center color-dark my-4">
            <a href={pdf} download="Sean's Resume.pdf" className="a2 mb-4"><h2>Download my resume here!</h2></a>
            <div className="my-2">
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>React</li>
                    <li>HandleBars</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="my-2">
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySql</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    <li>Sequelize</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;