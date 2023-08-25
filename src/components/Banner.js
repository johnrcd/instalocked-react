import "./Banner.css";

/**
 * Displays the company name and logo.
 */
function Banner(){
    return(
        <div className="banner">
            <h1>Instalocked Inc.</h1>
            <img
                // process.env.PUBLIC_URL used to allow images to render properly on both
                // production and deployment builds
                src={process.env.PUBLIC_URL + "/images/company_logo.png"}
                alt="Company logo of Instalocked Inc"
            />
        </div>
    );
}

export default Banner;