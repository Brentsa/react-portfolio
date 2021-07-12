
function Footer(){
    return(
        <footer className="d-flex container justify-content-evenly background-primary color-tertiary">
            <h1>
                <a className="svg-img" href="https://stackoverflow.com/users/14084009/sean-brent" target="_blank" rel="noreferrer">
                    <i class="fab fa-stack-overflow"></i>
                </a>
            </h1>
            <h1>
                <a className="svg-img" href="https://github.com/Brentsa" target="_blank" rel="noreferrer">
                    <i class="fab fa-github"></i>
                </a>
            </h1>
            <h1>
                <a className="svg-img" href="https://www.linkedin.com/in/sean-brent/" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
            </h1>
        </footer>
    )
}

export default Footer;