function ProficiencyBox({title, technologies, techAssets})
{
    return (
        <div className="my-4 col-12 d-flex flex-column align-items-center">
            <h3>{title}</h3>
            <div className="d-flex top-border mt-2">
                <ul className="col-6 d-flex align-items-start p-2" >
                    {technologies.map((tech, i) => <li className="col-12 col-xl-5 my-2 tech-li" key={i}>{tech}</li>)}
                </ul>
                <div className="col-6 d-flex flex-wrap justify-content-center">
                    {techAssets.map(asset=> <img className={asset === "Express.svg" || asset === "Mongo.png" ? "tech-images-long" : "tech-images"} alt="logo" key={asset} src={require(`../assets/Tech Images/${asset}`).default}></img>)}
                </div>
            </div>
        </div>
    )
}

export default ProficiencyBox;
