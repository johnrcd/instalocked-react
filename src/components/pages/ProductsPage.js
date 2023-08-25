import Header from "../Header";
import Footer from "../Footer";
import ProductList from "../ProductList";
import json from "../../data/products.json";

/**
 * Displays the products page.
 */
function ProductsPage(){
    return(
        <div id="pageWrapper">
            <Header />
            <ProductList products={json.products} />
            <Footer />
        </div>
    );
}

export default ProductsPage;