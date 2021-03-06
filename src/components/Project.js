import ButtonLink from "./ButtonLink";

//Feed a project into the component using a prop
function Project({project}){

    //take the name, url, and gihub url from the project
    const {name, url, github, technologies, summary} = project;

    var techList = '';

    for(var i = 0; i < technologies.length; i++){
        techList = techList + (technologies.length === (i+1) ? `${technologies[i]}` : `${technologies[i]} • `);
    } 

    return (
        <div className="project-card background-tertiary">
            <a className="project-picture" href={url} target="_blank" rel="noreferrer">
                
                <img src={require(`../assets/${name.replace(/ /g, '')}.png`).default} alt={name} className="image"/>

                <div className="overlay">
                    <p className="hidden-text">Go To Website</p>
                </div>
            </a>
            <div className="project-card-content">
                <h1 className="project-title">{name}</h1>
                <p className="project-text">
                    <span style={{fontSize:"20px", fontWeight:"bold"}}>Summary:</span> {summary}
                </p>
                <p className="project-text">
                    <span style={{fontSize:"20px", fontWeight:"bold"}}>Technologies:</span> {techList}
                </p>
                <ButtonLink 
                    href={github} 
                    children="GitHub Repo"
                    icon="fab fa-github"
                >
                </ButtonLink>
            </div>
        </div>
    );
}

export default Project;