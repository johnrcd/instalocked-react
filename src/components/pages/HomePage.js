import Layout from "../Layout";

/**
 * Displays the home page. This is the landing page for the site.
 */
function HomePage(){
    const pageContent = (
        <article>
                <p>
                    Hey Jett mains! Are you constantly being held back by bad team mates? Do you
                    always die when you dash in because your team can't clear? Are buy rounds
                    wasted on lowly Vandals and full shields? Are you better than everyone else
                    but still hard stuck in Iron? Well I've got the stuff for you! 
                </p>
                <p>
                    Here at Instalocked Inc., we have a wide variety of items that are perfect for
                    you! Need to run away? We have the solution! Caught with your pants down? No
                    worries, we've got something for you. Whatever your needs, we'll have them in 
                    stock for you to perform at your absolute best. I'll see you in Radiant, Jett
                    mains! 
                </p>
        </article>
    );
    return(
        <Layout content={pageContent}/>
    );
}

export default HomePage;