function Product(props)
{
    return (
        <div class="productContainer">
            <h2 class="productName">{props.name}</h2>
            <h3 class="productPrice">{props.price}</h3>
            <p class="productDescription">{props.description}</p>
        </div>
    );
}

export default Product;