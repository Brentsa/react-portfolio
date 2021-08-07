//import the pdf from the assets so that we can set it as a download
import pdf from '../assets/Resume.pdf'
import { useState } from 'react';

function Resume(){
    
    const [languages] = useState(['Javascript', 'C++', 'Python', "SQL"]);
    const [frontEnd] = useState(['React', 'Redux', 'Handlebars', 'HTML', 'CSS', "Bootstrap", "JQuery", "Material-UI", 'IndexedDB', 'Webpack'])
    const [backEnd] = useState(['Express', 'MongoDB', 'MySql', 'Mongoose', 'GraphQL', 'Sequelize', 'Apollo', 'JSON Web Token', 'Express-Session'])
    const [technologies] = useState([ 'Unreal Engine 4', 'Microsoft Visual Studio 2019', 'Microsoft Visual Code', 'Simple DirectMedia Layer 2.0 (SDL 2.0)'])

    //include a link to download Sean's resume
    return(
        <section className="d-flex row color-dark p-4 justify-content-center">

            <div className="col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center justify-content-center resume-card">
                <a href={pdf} download="Sean's Resume.pdf" className="a2"><i class="far fa-file-pdf resume-icon"></i></a>
                <h2 className="col-10 col-lg-8 mb-4 py-3 top-border bottom-border color-primary text-center">Click the PDF icon above to download my resume!</h2>
            </div>
            
            <div className="col-12 col-md-8">
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
            </div>
            
        </section>
    );
}

export default Resume;