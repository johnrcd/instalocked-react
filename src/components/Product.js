/**
 * Displays information about a product.
 * 
 * @param {string} name The name of the product.
 * @param {string} price The price of the product. This should also include the currency being
 * used.
 * @param {string} description Information about the product. Can also be used as flavor text.
 */
function Product({name, price, description})
{
    return (
        <div className="productContainer">
            <h2 className="productName">{name}</h2>
            <h3 className="productPrice">{price}</h3>
            <p className="productDescription">{description}</p>
        </div>
    );
}

export default Product;