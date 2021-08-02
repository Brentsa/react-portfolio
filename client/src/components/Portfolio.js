import {useState} from 'react';
import Project from './Project';

function Portfolio(){

    //create a state array for the projects to display in the portfolio
    const [projects] = useState([
        {name: 'Randomeyes', url: 'https://randomeyes.herokuapp.com/', imgSrc: '../assets/Randomeyes.png', github: 'https://github.com/Brentsa/random-eyes'},
        {name: 'Deep Thoughts', url: 'https://fast-plateau-23885.herokuapp.com/', imgSrc: '../assets/DeepThoughts.png', github: 'https://github.com/Brentsa/deep-thoughts'},
        {name: 'LocalShop', url: 'https://shop-local-with-localshop.herokuapp.com/', imgSrc: '../assets/LocalShop.png', github: 'https://github.com/chaitalizn/localshop'},
        {name: 'The Tech Blog', url: 'https://the-tech-blog-17676761123.herokuapp.com/', imgSrc: '../assets/TheTechBlog.png', github: 'https://github.com/Brentsa/tech-blog'},
        {name: 'Budget Tracker', url: 'https://budget-tracker-app-456787.herokuapp.com/', imgSrc: '../assets/BudgetTracker.png', github: 'https://github.com/Brentsa/budget-tracker'},
        {name: 'Zoo Keepr', url: 'https://shrouded-forest-51475.herokuapp.com/', imgSrc: '../assets/ZooKeepr.png', github: 'https://github.com/Brentsa/zookeepr'},
        {name: 'Note Taker', url: 'https://note-taker-123456789.herokuapp.com/', imgSrc: '../assets/NoteTaker.png', github: 'https://github.com/Brentsa/note-taker'}
    ])

    return (
        <section className="d-flex flex-column align-items-center color-dark">
            <h2 className="my-3">Portfolio</h2>
            <div className="d-flex justify-content-evenly flex-wrap">
                {projects.map(project => (
                    <Project project={project} key={project.name}/>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;