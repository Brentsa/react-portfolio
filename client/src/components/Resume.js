import { useState } from 'react';
import ProficiencyBox from './ProficiencyBox';
import ResumeCard from './ResumeCard';

function Resume()
{
    const [languages] = useState(['Javascript', 'C++', 'Python', "SQL"]);
    const [frontEnd] = useState(['React', 'Redux', 'Handlebars', 'HTML', 'CSS', "Bootstrap", "JQuery", "Material-UI", 'IndexedDB', 'Webpack'])
    const [backEnd] = useState(['Express', 'MongoDB', 'MySql', 'Mongoose', 'GraphQL', 'Sequelize', 'Apollo', 'Bcrypt', 'Express-Session', 'JSON Web Token'])
    const [technologies] = useState([ 'Unreal Engine 4', 'Microsoft Visual Code', 'Microsoft Visual Studio 2019', 'Simple DirectMedia Layer 2.0'])

    const [languageAssets] = useState(["C++.png", "Javascript.png", "Python.png"])
    const [frontEndAssets] = useState(["React.png", "Redux.png", "CSS.png", "HTML.png"])
    const [backEndAssets] = useState(["Node.png", "MySQL.png", "Mongo.png", "Express.svg"])
    const [technologyAssets] = useState(["UnrealEngine.png", "VisualStudio.png", "SDL.svg"])

    //include a link to download Sean's resume
    return(
        <section className="d-flex row color-dark p-4 justify-content-center">

            <ResumeCard/>
            
            <div className="col-12 col-md-7 d-flex flex-column align-items-center align-items-md-end">
                <ProficiencyBox title="Programming Languages" technologies={languages} techAssets={languageAssets} />
                <ProficiencyBox title="Front-End Proficiencies" technologies={frontEnd} techAssets={frontEndAssets} />
                <ProficiencyBox title="Back-End Proficiencies" technologies={backEnd} techAssets={backEndAssets} />
                <ProficiencyBox title="Other Technologies" technologies={technologies} techAssets={technologyAssets} />
            </div>

        </section>
    );
}

export default Resume;