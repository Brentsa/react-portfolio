//import the pdf from the assets so that we can set it as a download
import pdf from '../assets/Resume.pdf'
import { useState } from 'react';

function Resume(){
    
    const [languages] = useState(['Javascript', 'C++', 'Python', "SQL"]);
    const [frontEnd] = useState(['React', 'Redux', 'Handlebars', 'HTML', 'CSS', "Bootstrap", "Material-UI", 'IndexedDB', 'Webpack'])
    const [backEnd] = useState(['Express', 'MongoDB', 'MySql', 'Mongoose', 'GraphQL', 'Sequelize', 'Apollo', 'JSON Web Token', 'Express-Session'])
    const [technologies] = useState([ 'Unreal Engine 4', 'Microsoft Visual Studio 2019', 'Microsoft Visual Code', 'Simple DirectMedia Layer 2.0 (SDL 2.0)'])

    //include a link to download Sean's resume
    return(
        <section className="d-flex flex-column align-items-center col-12 color-dark my-4">
            <a href={pdf} download="Sean's Resume.pdf" className="a2 mb-4 pb-2 bottom-border"><h2>Download my resume here!</h2></a>
            <div className="my-4 col-6 d-flex flex-column align-items-center">
                <h3>Programming Languages</h3>
                <ul>
                    {languages.map(language => <li>{language}</li>)}
                </ul>
            </div>
            <div className="my-4 col-6 d-flex flex-column align-items-center">
                <h3>Front-End Proficiencies</h3>
                <ul>
                    {frontEnd.map(tech => <li>{tech}</li>)}
                </ul>
            </div>
            <div className="my-4 col-6 d-flex flex-column align-items-center">
                <h3>Back-End Proficiencies</h3>
                <ul>
                    {backEnd.map(tech => <li>{tech}</li>)}
                </ul>
            </div>
            <div className="my-4 col-6 d-flex flex-column align-items-center">
                <h3>Other Technologies</h3>
                <ul>
                    {technologies.map(tech => <li>{tech}</li>)}
                </ul>
            </div>
        </section>
    );
}

export default Resume;