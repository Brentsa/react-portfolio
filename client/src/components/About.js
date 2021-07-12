
function AboutMe(){
    return (
        <section className="color-dark d-flex flex-column align-items-center p-4 mb-4">
            <h2 className="my-3">About Me</h2>
            <img src={require("../assets/headshot.JPG").default} className="img-rounded my-4" alt="Sean Headshot"></img>
            <div className="top-border d-flex flex-column align-items-center mt-4 pt-4">
                <p className="my-3">
                    Pragmatic relationship builder with a passion for technology and innovation.
                </p>
                <p className="my-3">
                    Professional experience comprised of varied disciplines including commercial sales, financial analytics, supply chain management, and product costing.
                </p>
                <p className="my-3">
                    Full-Stack web developer focusing on the MERN stack. I am always ready to learn and incorporate new technologies into my work!
                </p>
                <p className="my-3">
                    Self taught C++ and SQL programmer. Delves into personal passion projects; always hungry to continue improving current capabilities.
                </p>
                <p className="my-3">
                    Driven to create solutions-oriented programs that reside at the precipice of technical innovation while simultaneously balancing aesthetics and functionality.
                </p>
            </div>
        </section>
    )
}

export default AboutMe;