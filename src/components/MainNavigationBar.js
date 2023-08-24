
/**
 * Navigation bar with the top level elements of the web page.
 * 
 * @param {string} className The value of the class property.
 */
function MainNavigationBar({className})
{
    return(
        <nav className={className}>
            <ul>
                <li><a href="javascript:;">Home</a></li>
                <li><a href="javascript:;">Products</a></li>
                <li><a href="javascript:;">Contact</a></li>
            </ul>
        </nav>
    );
}

export default MainNavigationBar;