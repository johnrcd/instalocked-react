import MainNavigationBar from "./MainNavigationBar";
import Banner from "./Banner";

/**
 * Displays the header of the site, including the title, logo, and main navigation bar.
 * 
 * All content in this component is wrapped by the "header" html element.
 */
function Header()
{
    return(
        <header>
            <Banner></Banner>
            <MainNavigationBar class="topNavigationBar"></MainNavigationBar>
        </header>
    );
}

export default Header;