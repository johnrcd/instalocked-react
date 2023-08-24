import products from '../data/products.json';
import ProductList from '../components/ProductList';

function ProductListContainer()
{
    const productArray = products.products;
    return <ProductList products={productArray}></ProductList>;
}

export default ProductListContainer;