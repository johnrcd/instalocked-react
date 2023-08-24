import { Outlet, Link } from "react-router-dom";

/**
 * Navigation bar with the top level elements of the web page.
 * 
 * @param {string} className The value of the class property.
 */
function MainNavigationBar({className})
{
    return(
        <>
            <nav className={className}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainNavigationBar;