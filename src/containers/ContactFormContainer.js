import { useState, useRef, useEffect} from "react";
import "../components/ContactForm.css";
import { useNavigate } from "react-router-dom";

/**
 * Displays the contact form for the site.
 * 
 * This component uses id's to manage its own state -- it is recommended to only ever have one
 * instance displaying at all times.
 */
function ContactFormContainer(){
    // thank you w3 schools for the reference
    // https://www.w3schools.com/react/react_forms.asp

    const [inputs, setInputs] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const firstUpdate = useRef(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) =>
    {
        setHasSubmitted(true);
        hideErrors();
        e.preventDefault();
        if (isValidForm()){
            navigate("/formSubmitted");
        }
    }

    const handleReset = () => {
        hideErrors();
    }

    // validates errors. if errors are found, displays them
    const isValidForm = () => {
        let hasErrors = false;

        // validate name
        const name = document.getElementById("name").value;
        if(name.length < 1){
            const error = document.getElementById("name_empty_error");
            error.style.display = "block";
            hasErrors = true;
        }

        // validate phone number
        const phoneRawInput = document.getElementById("phone").value;
        const phone = phoneRawInput.replace(/-|\s/g,"")
        if(phone.length < 1){
            const error = document.getElementById("phone_empty_error");
            error.style.display = "block";
            hasErrors = true;
        }
        else if(phone.length != 10){
            const error = document.getElementById("phone_input_error");
            error.style.display = "block";
            hasErrors = true;
        }

        // validate email
        const email = document.getElementById("email").value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email.length < 1){
            const error = document.getElementById("email_empty_error");
            error.style.display = "block";
            hasErrors = true;
        }
        else if(!emailRegex.test(email)){
            const error = document.getElementById("email_input_error");
            error.style.display = "block";
            hasErrors = true;
        }

        // no validation for comments, since they're optional

        return !hasErrors;
    }

    const hideErrors = () => {
        let error = document.getElementsByClassName("form_error");
        for (let i = 0; i < error.length; i++) {
            error[i].style.display = "none";
        }
    }

    // used to hide errors on the first load
    // i'm not sure how this works but here are the links i used

    // firstUpdate: https://stackoverflow.com/a/31079244
    // useEffect: https://stackoverflow.com/a/63193262
    useEffect(() => {
        if (firstUpdate.current){
            firstUpdate.current = false;
            hideErrors();
        }
    }, []);

    return (
        <form id="contactForm" action="index.html" method="post" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Contact Us</legend>
                <ul>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onInput={handleChange}
                        />
                        <p id="name_empty_error" className="form_error">
                            Must have input
                        </p>
                    </li>
                    <li>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            onChange={handleChange}
                        />
                        <p id="phone_empty_error" className="form_error">
                            Must have input
                        </p>
                        <p id="phone_input_error" className="form_error">
                            Invalid phone number given
                        </p>
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                        />
                        <p id="email_empty_error" className="form_error">
                            Must have input
                        </p>
                        <p id="email_input_error" className="form_error">
                            Invalid email given
                        </p>
                    </li>
                    <li>
                        <label htmlFor="comments">Comments</label>
                        <textarea
                            id="comments"
                            rows="4"
                            cols="50"
                            onChange={handleChange}
                        />
                    </li>
                    <button type="submit" id="submit">Submit</button>
                    <button type="reset" id="reset" onClick={handleReset}>Reset</button>
                </ul>
            </fieldset>
        </form>
        /*
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Enter your age:
            <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
            />
            </label>
            <input type="submit" />
        </form>
        */
    );
    
}

export default ContactFormContainer;