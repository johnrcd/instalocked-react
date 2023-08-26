import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

/**
 * The layout for every page. Each page has the same header and footer, with the differences being
 * the content shown in the middle.
 * 
 * @param {ReactElement} content The content to display on the page.
 */

// if i remove the curly brackets and instead use content.children it breaks
// i don't really get it but because of that i'm keeping it like this
function Layout ({content}) {
    return (
        <div className="defaultLayout">
            <Header/>
                <div className="content">
                    {content}
                </div>
            <Footer />
        </div>
    );
}

export default Layout;