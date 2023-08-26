import Layout from "../Layout";

/**
 * Page to display when a form has been submitted. Specifically, the contact form.
 * 
 * This is a hidden page not accessable by the main nav bar.
 */
function FormSubmitted(){
    let pageContent = (
        <article>
            <p>
                You successfully submitted the contact form! Congratulations!
            </p>
            <p>
                Unfortunately, I didn't put any logic in place to handle what happens when you
                submit the form, so instead you get this secret page to view.
            </p>
        </article>
    );

    return(
        <Layout content={pageContent}/>
    );
}

export default FormSubmitted;