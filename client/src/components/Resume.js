//import the pdf from the assets so that we can set it as a download
import pdf from '../assets/Resume.pdf'
import { useState } from 'react';

function Resume(){
    
    const [languages] = useState(['Javascript', 'C++', 'Python', "SQL"]);
    const [frontEnd] = useState(['React', 'Redux', 'Handlebars', 'HTML', 'CSS', "Bootstrap", "JQuery", "Material-UI", 'IndexedDB', 'Webpack'])
    const [backEnd] = useState(['Express', 'MongoDB', 'MySql', 'Mongoose', 'GraphQL', 'Sequelize', 'Apollo', 'Bcrypt', 'Express-Session', 'JSON Web Token'])
    const [technologies] = useState([ 'Unreal Engine 4', 'Microsoft Visual Code', 'Microsoft Visual Studio 2019', 'Simple DirectMedia Layer 2.0'])

    //include a link to download Sean's resume
    return(
        <section className="d-flex row color-dark p-4 justify-content-center">

            <div className="col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center justify-content-center resume-card">
                <a href={pdf} download="Sean's Resume.pdf" className="a2"><i className="far fa-file-pdf resume-icon"></i></a>
                <h2 className="col-10 col-lg-8 mb-4 py-3 top-border bottom-border color-primary text-center">Click the PDF icon above to download my resume!</h2>
            </div>
            
            <div className="col-12 col-md-8 d-flex flex-column align-items-end">
                <div className="my-4 col-10 d-flex flex-column align-items-center">
                    <h3>Programming Languages</h3>
                    <div className="d-flex top-border mt-2">
                        <ul className="col-6 d-flex flex-wrap p-4" >
                            {languages.map((language, i) => <li className="col-12 col-md-5 tech-li" key={i}>{language}</li>)}
                        </ul>
                        <div className="col-6 d-flex flex-wrap justify-content-center">
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/C++.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/Javascript.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/Python.png").default}></img>
                        </div>
                    </div>
                </div>

                <div className="my-4 col-10 d-flex flex-column align-items-center">
                    <h3>Front-End Proficiencies</h3>
                    <div className="d-flex top-border mt-2">
                        <ul className="col-6 d-flex flex-wrap p-4">
                            {frontEnd.map((tech, i) => <li className="col-12 col-md-5 tech-li" key={i}>{tech}</li>)}
                        </ul>
                        <div className="col-6 d-flex flex-wrap justify-content-center">
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/React.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/Redux.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/CSS.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/HTML.png").default}></img>
                        </div>
                    </div>
                </div>

                <div className="my-4 col-10 d-flex flex-column align-items-center">
                    <h3>Back-End Proficiencies</h3>
                    <div className="d-flex top-border mt-2">
                        <ul className="col-6 d-flex flex-wrap p-4">
                            {backEnd.map((tech, i) => <li className="col-12 col-md-5 tech-li" key={i}>{tech}</li>)}
                        </ul>
                        <div className="col-7 d-flex flex-wrap justify-content-center align-items-center">
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/Node.png").default}></img>
                            <img className="tech-images-long" alt="logo" src={require("../assets/Tech Images/Mongo.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/MySQL.png").default}></img>
                            <img className="tech-images-long" alt="logo" src={require("../assets/Tech Images/Express.svg").default}></img>
                        </div>
                    </div>
                </div>

                <div className="my-4 col-10 d-flex flex-column align-items-center">
                    <h3>Other Technologies</h3>
                    <div className="d-flex top-border mt-2">
                        <ul className="col-6 d-flex flex-wrap p-4">
                            {technologies.map((tech, i) => <li className="col-12 col-md-5 tech-li" key={i}>{tech}</li>)}
                        </ul>
                        <div className="col-6 d-flex flex-wrap justify-content-center">
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/UnrealEngine.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/VisualStudio.png").default}></img>
                            <img className="tech-images" alt="logo" src={require("../assets/Tech Images/SDL.svg").default}></img>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Resume;