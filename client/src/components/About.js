
function AboutMe(){
    return (
        <section className="color-dark d-flex flex-column align-items-center p-4 mb-4">
            <h2 className="my-3">About Me</h2>
            <img src={require("../assets/headshot.JPG").default} className="img-rounded my-4" alt="Sean Headshot"></img>
            <div className="top-border d-flex flex-column align-items-center mt-4 p-4">
                <p className="my-3">
                    Hello, my name is Sean Brent and I am a full-stack web developer with a predominant focus on the MERN stack of technologies. 
                    There is nothing I am more passinate for than software development and I endeavour to continuously improve my craft.
                </p>
                <p className="my-3">
                    I recently completed a coding bootcamp with the University of Toronto. The bootcamp taught me how to develop both the front-end and back-end of a website. 
                    In addition, I learned some computer science concepts and honed my ability to write efficient algorithyms.
                    On the front-end I have extensive experience with the React framework. I can write clean components, manage state locally/globally, and utilize hooks for component rendering.
                    In contrast, I have built the back-end on numerous projects using RESTful APIs and GraphQL architectures. My APIs function in tandem with either SQL or NoSQL databases using standard CRUD operations.
                </p>
                <p className="my-3">
                    Furthermore, I am also a self-taught C++ developer. In my free time, I have always enjoyed playing video games. A few years ago I decided to try learning C++ to make my own fun games. 
                    I learned the entire language on my own and firmly grasp concepts such as object-oriented programming, polymorphism, pointers/references, etc. The C++ Standard Template Library was also a large topic I focused on.
                    The STL taught me about many common data structures found in computer science such as dynamic arrays, lists, sets, and maps. 
                    I also went in depth on algorithyms and big O notation utilising search, insert, transform, remove, and sort functions with iterators.
                </p>
                <p className="my-3">
                    Driven to create solutions-oriented programs that reside at the precipice of technical innovation while simultaneously balancing aesthetics and functionality. 
                    Please take a look at my portfolio section to view some of the projects I have created!
                </p>
            </div>
        </section>
    )
}

export default AboutMe;