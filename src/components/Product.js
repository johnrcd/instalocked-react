import "./Product.css";

/**
 * Displays information about a product.
 * 
 * @param {string} name The name of the product.
 * @param {string} price The price of the product. This should also include the currency being
 * used.
 * @param {string} description Information about the product. Can also be used as flavor text.
 * @param {string} icon Link to the icon of the product.
 * @param {string} alt Alternative text of the icon.
 */
function Product({name, price, description, icon, alt})
{
    return (
        <div className="product">
            <img
                // process.env.PUBLIC_URL used to allow images to render properly on both
                // production and deployment builds
                src={process.env.PUBLIC_URL + icon}
                alt={alt}
            />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Product;