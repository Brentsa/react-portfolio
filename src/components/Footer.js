
function Footer(){
    return(
        <footer className="container background-primary color-tertiary">
            <div className="row p-2 justify-content-center align-items-center">
                <a className="svg-img a-light col-8 col-lg-3 text-lg-center text-nowrap p-2" href="tel:905-467-6136"><i className="fas fa-phone align-middle px-3"></i>905 467 6136</a>
                <a className="svg-img a-light col-8 col-lg-3 text-lg-center text-nowrap p-2" href="mailto: seanbrent5@gmail.com"><i className="fas fa-envelope align-middle px-3"></i>seanbrent5@gmail.com</a> 
                <div className=" col-12 col-lg-6 p-2 d-flex justify-content-evenly">
                    <a className="svg-img a-light" href="https://github.com/Brentsa" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a className="svg-img a-light" href="https://www.linkedin.com/in/sean-brent/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a> 
                    <a className="svg-img a-light" href="https://stackoverflow.com/users/14084009/sean-brent" target="_blank" rel="noreferrer"><i className="fab fa-stack-overflow"></i></a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;