import Header from "../Header";
import Footer from "../Footer";

/**
 * Displays the contact page.
 */
function ContactPage(){
    const pageContent = (
        <form id="contactForm" action="index.html" method="post">
            <fieldset>
                <legend>Contact Information</legend>
                <ul>
                    <li>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="phone" />
                        <p id="name_empty_error" class="form_error">
                            Must have input
                        </p>
                    </li>
                    <li>
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" />
                        <p id="phone_empty_error" class="form_error">
                            Must have input
                        </p>
                        <p id="phone_input_error" class="form_error">
                            Invalid phone number given
                        </p>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <p id="email_empty_error" class="form_error">
                            Must have input
                        </p>
                        <p id="email_input_error" class="form_error">
                            Invalid email given
                        </p>
                    </li>
                    <li>
                        <label for="comments">Comments</label>
                        <textarea id="comments" rows="4" cols="50"></textarea>
                    </li>
                    <button type="submit" id="submit">Submit</button>
                    <button type="reset" id="reset">Reset</button>
                </ul>
                
            </fieldset>
        </form>
    );
    
    return(
        <Layout content={pageContent}/>
    );
}

export default ContactPage;