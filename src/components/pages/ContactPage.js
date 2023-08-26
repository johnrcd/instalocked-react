import Layout from "../Layout";
import ContactFormContainer from "../../containers/ContactFormContainer";

/**
 * Displays the contact page.
 */
function ContactPage(){
    const pageContent = <ContactFormContainer />;
    
    return(
        <Layout content={pageContent}/>
    );
}

export default ContactPage;