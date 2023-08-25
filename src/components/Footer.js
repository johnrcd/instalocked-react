import MainNavigationBar from "./MainNavigationBar";
import "./Footer.css";

/**
 * Content at the bottom of the page. Displays the main navigation bar, and credits.
 * All content in this component is wrapped by the footer element.
 */
function Footer()
{
    return(
        <footer className="pageFooter">
            <MainNavigationBar className="footerNav"></MainNavigationBar>
            <p>Website created by Rovi Decena using React.</p>
        </footer>
    );
}

export default Footer;