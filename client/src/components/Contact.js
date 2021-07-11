
function ContactForm(){
    return(
        <section className="d-flex flex-column align-items-center color-dark p-4 mb-4">
            <h2 className="mb-4">Contact Me</h2>
            <form className="w-50">
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2">Name: </label>
                    <input type="text" className="form-control" name="name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2">Email: </label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2">Message: </label>
                    <textarea name="message" className="form-control" rows="6"/>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <button class="btn background-secondary color-dark px-4">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;