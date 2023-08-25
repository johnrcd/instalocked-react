import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

/**
 * The layout for every page. Each page has the same header and footer, with the differences being
 * the content shown in the middle.
 * 
 * @param {ReactElement} content The content to display on the page.
 */
function Layout (content) {
    return (
        <div class="defaultLayout">
            <Header/>
            <div className="content">
                {content.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;