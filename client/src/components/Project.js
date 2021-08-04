//Feed a project into the component using a prop
function Project({project}){

    //take the name, url, and gihub url from the project
    const {name, url, github} = project;

    return (
        // <div className="card card-format col-12 col-md-5 my-4">
        //     <img src={require(`../assets/${name.replace(/ /g, '')}.png`).default} className='card-img-top card-image' alt={name}/>
        //     <div className="card-body background-dark d-flex flex-column justify-content-center align-items-center">
        //         <a href={url} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
        //         <a href={github} target="_blank" rel="noreferrer"><h3>GitHub <i className="fab fa-github"></i></h3></a>
        //     </div>
        // </div>

        <div className="project-card background-secondary">
            <div className="project-picture">
                <img src={require(`../assets/${name.replace(/ /g, '')}.png`).default} alt={name}/>
            </div>
            <div className="project-card-content">
                <h1 className="project-title">{name}</h1>
                <a href={url} target="_blank" rel="noreferrer">{name}</a>
                <a href={github} target="_blank" rel="noreferrer">GitHub <i className="fab fa-github"></i></a>
            </div>
        </div>
    );
}

export default Project;