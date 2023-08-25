import Header from "../Header";
import Footer from "../Footer";
import ProductList from "../ProductList";
import json from "../../data/products.json";
import Layout from "../Layout";

/**
 * Displays the products page.
 */
function ProductsPage(){
    const pageContent = (
        <ProductList products={json.products} />
    );
    
    return(
        <Layout content={pageContent}/>
    );
}

export default ProductsPage;