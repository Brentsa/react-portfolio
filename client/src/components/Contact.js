import { useState } from "react";

function ContactForm(){

    const [formState, setForm] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    const [error, setError] = useState('');

    async function handleChange(event){
        if(event.target.name === 'email'){
            var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;

            if(!event.target.value.match(validRegex)){
                await setError('Please enter a valid email.');
            }
            else{
                await setError('');
            }
        }
        else{
            if(!event.target.value){
                await setError('You are missing a required field.');
            }
            else{
                await setError('');
            }
        }

        setForm({...formState, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event){
        event.preventDefault();

        if(!error){
            console.log(formState);
        }
    }

    return(
        <section className="d-flex flex-column align-items-center color-dark p-4 mb-4">
            <h2 className="mb-4">Contact Me</h2>
            <form className="w-50" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2">Name: </label>
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2">Email: </label>
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2">Message: </label>
                    <textarea name="message" className="form-control" rows="6" defaultValue={message} onBlur={handleChange}/>
                </div>
                {error && <p>{error}</p>}
                <div className="d-flex flex-column align-items-center">
                    <button className="btn background-secondary color-dark px-4">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;