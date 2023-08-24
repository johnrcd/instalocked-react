import Header from "../Header";
import Footer from "../Footer";
import ProductList from "../ProductList";

/**
 * Displays the products page.
 */
function ProductsPage(){
    return(
        <div id="pageWrapper">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}

export default ProductsPage;