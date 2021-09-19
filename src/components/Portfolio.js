import {useState} from 'react';
import Project from './Project';

function Portfolio(){

    //create a state array for the projects to display in the portfolio
    const [projects] = useState([
        {
            name: 'Randomeyes', 
            url: 'https://randomeyes.herokuapp.com/', 
            imgSrc: '../assets/Randomeyes.png', 
            github: 'https://github.com/Brentsa/random-eyes', 
            technologies:['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose', 'GraphQL', 'Apollo', 'Redux', 'JWT', 'Material-UI'],
            summary: 'A modern "swiping" e-commerce experience.'
        },
        {
            name: 'Shop-Shop', 
            url: 'https://shop-shop-version-redux.herokuapp.com/', 
            imgSrc: '../assets/Shop-Shop.png', 
            github: 'https://github.com/Brentsa/shop-shop-redux',  
            technologies:['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose', 'GraphQL', 'Apollo', 'Redux', 'IndexedDB'],
            summary: 'A classic cart based e-commerce app.'
        },
        {
            name: 'Book Search', 
            url: 'https://google-book-search-engine-app.herokuapp.com/', 
            imgSrc: '../assets/BookSearch.png', 
            github: 'https://github.com/Brentsa/book-search-engine',   
            technologies:['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose', 'GraphQL', 'Apollo'],
            summary: 'Search for books and create a favourites list.'
        },
        {
            name: 'Deep Thoughts', 
            url: 'https://fast-plateau-23885.herokuapp.com/', 
            imgSrc: '../assets/DeepThoughts.png', 
            github: 'https://github.com/Brentsa/deep-thoughts',    
            technologies:['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL', 'Apollo', 'JWT'],
            summary: 'Share your thoughts and reactions with friends.'
        },
        {
            name: 'LocalShop', 
            url: 'https://shop-local-with-localshop.herokuapp.com/', 
            imgSrc: '../assets/LocalShop.png', 
            github: 'https://github.com/chaitalizn/localshop', 
            technologies:['MySQL', 'Express', 'Node.js', 'Sequelize', 'Handlebars', 'Express-Session'],
            summary: 'Display your local business to consumers.'
        },
        {
            name: 'The Tech Blog', 
            url: 'https://the-tech-blog-17676761123.herokuapp.com/', 
            imgSrc: '../assets/TheTechBlog.png', 
            github: 'https://github.com/Brentsa/tech-blog',    
            technologies:['MySQL', 'Express', 'Node.js', 'Sequelize', 'Handlebars', 'Express-Session'],
            summary: 'Catch up on the latest from the tech community.'
        },
        {
            name: 'Budget Tracker', 
            url: 'https://budget-tracker-app-456787.herokuapp.com/', 
            imgSrc: '../assets/BudgetTracker.png', 
            github: 'https://github.com/Brentsa/budget-tracker',   
            technologies:['Express', 'MongoDB', 'Mongoose', 'indexedDB', 'Service-Worker'],
            summary: 'Keep track of your revenues and expenses.'
        },
        {
            name: 'Pizza Hunt', 
            url: 'https://peaceful-castle-13286.herokuapp.com/add-pizza', 
            imgSrc: '../assets/PizzaHunt.png', 
            github: 'https://github.com/Brentsa/pizza-hunt',   
            technologies:['Express', 'MongoDB', 'Mongoose', 'REST API'],
            summary: 'Show your pizza creations and pick up a few too.'
        }
    ])

    return (
        <section className="d-flex flex-column align-items-center color-dark py-md-4 px-md-0 p-2">
            <h2 className="my-3 text-center pt-3">Check out some of the applications I have built.</h2>
            <h3 className="disclaimer">Note: Apps can take 15-20 seconds to load due to inactivity from the free Heroku hosting service.</h3>
            <div className="d-flex justify-content-center justify-content-xl-between flex-wrap">
                {projects.map((project, i) => <Project key={i} project={project} />) }
            </div>
        </section>
    )
}

export default Portfolio;