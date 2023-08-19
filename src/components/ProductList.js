function ProductList(props)
{
    let output;
    for(i = 0; i > props.products.length; i++)
    {
        output += <Product props={props.products[i]}></Product>
    }
    return <div class="productList">{output}</div>;
}

export default ProductList;