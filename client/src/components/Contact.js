import { useState } from "react";
import ContactInfo from "./ContactInfo";

function ContactForm(){

    //create a state to keep track of the data being entered into the contact form
    const [formState, setForm] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    //create a state to hold error messages
    const [error, setError] = useState('');

    //called whenever the cursor leaves a text input
    async function handleChange(event){

        //checks if the target left is an email
        if(event.target.name === 'email'){
            //regex to validate an email
            var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;

            //check if the value in the email input matches the email regex and provides an error if not
            if(!event.target.value.match(validRegex)){
                await setError('Please enter a valid email.');
            }
            else{
                await setError('');
            }
        }
        //check any other field, ie name and message. return an error if there is nothing written
        else{
            if(!event.target.value){
                await setError('You are missing a required field.');
            }
            else{
                await setError('');
            }
        }

        //set the form state whenever the mouse moves out of the input
        setForm({...formState, [event.target.name]: event.target.value});
    }

    //called when the form is submitted
    async function handleSubmit(event){
        event.preventDefault();

        //if there are no validate errors then we will log the form start
        /******* this is where back-end functionality will need to be implemented ********/
        if(!error){
            console.log(formState);
        }
    }

    return(
        <section className="d-flex flex-column align-items-center color-dark p-4 mb-4">
            <h2>Contact Me</h2>
            <form className="col-12 col-md-10 col-lg-8 contact-form" onSubmit={handleSubmit}>

                <ContactInfo/>

                <div className="d-flex flex-wrap justify-content-between">
                    <div className="mb-4 col-12 col-xl-4">
                        <label htmlFor="name" className="mb-2">Name: </label>
                        <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div className="mb-4 col-12 col-xl-7">
                        <label htmlFor="email" className="mb-2">Email: </label>
                        <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange}/>
                    </div>
                    <div className="mb-4 col-12">
                        <label htmlFor="message" className="mb-2">Message: </label>
                        <textarea name="message" className="form-control" rows="6" defaultValue={message} onBlur={handleChange}/>
                    </div>
                    {error && <p>{error}</p>}
                </div>
                

                <div className="d-flex flex-column align-items-center">
                    <button className="btn background-secondary color-dark px-4">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;