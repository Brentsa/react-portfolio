
function Footer(){
    return(
        <footer className="d-flex flex-column container justify-content-evenly background-primary color-tertiary">
            <div className="d-flex justify-content-evenly p-2">
                <h1>
                    <a className="svg-img a-light" href="tel:905-467-6136"><i className="fas fa-phone"></i></a>
                </h1>
                <h1>
                    <a className="svg-img a-light" href="mailto: seanbrent5@gmail.com"><i className="fas fa-envelope"></i></a>
                </h1>
                <h1>
                    <a className="svg-img a-light" href="https://github.com/Brentsa" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </h1>
                <h1>
                    <a className="svg-img a-light" href="https://www.linkedin.com/in/sean-brent/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </h1> 
                <h1>
                    <a className="svg-img a-light" href="https://stackoverflow.com/users/14084009/sean-brent" target="_blank" rel="noreferrer">
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                </h1>
            </div>
        </footer>
    )
}

export default Footer;