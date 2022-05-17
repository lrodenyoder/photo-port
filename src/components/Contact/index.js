import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email address is invalid');
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        
        console.log('errorMessage', errorMessage);
        
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            //use spread operator to retain other key value pairs. otherwise, object would be overwritten to only contain the altered value
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
    
    return (
        <section>
            <h1 data-testid="contact">Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {/* && is used as a short circuit. if the first value resolves to true, the second value will be evaluated */}
                    <button type="submit" onSubmit={handleSubmit} data-testid="submit-btn">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;