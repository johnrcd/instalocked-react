import Product from './Product.js';

/**
 * Generates an unordered list of products.
 * 
 * @param {Array<Product>} products The list of products.
 */
function ProductList({products})
{
    if (products != undefined)
    {
        return(
            <div className="productList">
                <ul>
                {
                    // i don't really understand how this works
                    // see reference: https://stackoverflow.com/a/65849307
                    products.map(
                        data =>
                        <li key={"productList_" + data.name}>
                            <Product
                                name={data.name}
                                price={data.price}
                                description={data.description}
                            ></Product>
                            </li>
                        )
                }
                </ul>
            </div>
            
        );
    }
    else return <></>;
}

export default ProductList;