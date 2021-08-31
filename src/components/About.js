import { useState } from "react";

import AccordionItem from "./AccordionItem";


function AboutMe(){
  
    const [descriptions] = useState([
        {
            open: true, 
            name: 'introduction', 
            parameters: 'sean', 
            content: 'Hello, my name is Sean Brent, and I am a full-stack web developer with a focus on the MERN stack of technologies. There is nothing I am more passionate about than software development and computer science. I endeavour to continuously improve my craft by learning new technologies and building innovative applications.'
        },
        {
            open: false, 
            name: 'frontEnd', 
            parameters: 'sean, webDev', 
            content: 'I recently completed a coding bootcamp with the University of Toronto. The course taught me how to develop both the front end and back end of a website. I also learned some computer science concepts that honed my ability to write efficient algorithms. On the front-end, I have extensive experience with the React framework and Redux. I can write clean components, manage state globally, and utilize hooks for rendering. In fact, this protfolio was written with React! I have utilized Jest to undergo unit tests and learned to code with a test-driven development mindset. For user authentication I use JSON Web Tokens (JWT). I can sign and decipher tokens and build middleware to check the user’s status.'
        },
        {
            open: false, 
            name: 'backEnd', 
            parameters: 'sean, webDev', 
            content: 'I have built the back end on numerous projects using RESTful APIs and GraphQL architectures. My APIs function in tandem with either SQL or NoSQL databases, specifically Sequelize/MySQL and Mongoose/MongoDB. I cannot forget to mention Express when speaking about a Node.js back end! I have the capability to link an Express server to a database and define API routes. When using GraphQL, I have experience integrating Apollo into the server. I follow standard CRUD operations through REST or achieve the similar results with queries and mutations.'
        },
        {
            open: false, 
            name: 'sourceControl', 
            parameters: 'sean', 
            content: 'Git was also a major component of our training. Source control is invaluable to a developer and became second nature to me over time. I branch, push, pull, and merge confidently because I understand the functionality of Git. I prefer to work with Git using the Git bash CLI; it is quick and efficient, especially when navigating through directories!'
        },
        {
            open: false, 
            name:'cPlusPlus', 
            parameters: 'sean, languages', 
            content: 'Possessing capabilities beyond web development, I am also a self-taught C++ developer. I have always enjoyed playing video games in my free time. A few years ago, I decided to learn C++ to begin game development as a hobby. I learned the entire language on my own and firmly grasp concepts such as object-oriented programming, polymorphism, pointers/references, etc. The C++ Standard Template Library (STL) was also a substantial topic I focused on. STL taught me about many common data structures found in computer science such as dynamic arrays, lists, sets, and maps. I also went in depth on algorithms and big O notation, utilising search, insert, transform, remove, and sort functions with iterators.'
        },
        {
            open: false, 
            name:'summary', 
            parameters: 'sean', 
            content: 'Summarizing my purpose, I possess a firm desire to create solution-oriented applications that reside at the precipice of technical innovation. Simultaneously balancing aesthetics and functionality is a fun challenge I am always willing to take on. Please check out my portfolio section to view some of the projects I have created!'
        },
    ])

    return (
        <section className="color-dark d-flex flex-column align-items-center p-md-4 mb-4">
            <h2 className="my-3 text-center p-3">Learn about my story and abilities as a full stack developer.</h2>

            <div className="img-container my-2">
                <img src={require("../assets/headshot.JPG").default} className="img-rounded my-4" alt="Sean Headshot"></img>
            </div>
    
            <div className="d-flex flex-column align-items-start pb-3 p-md-4 about-me-text w-100">
                {descriptions.map(({open, name, parameters, content}, i) => <AccordionItem open={open} name={name} parameters={parameters} content={content} key={i}/>)}
            </div>
        </section>
    )
}

export default AboutMe;