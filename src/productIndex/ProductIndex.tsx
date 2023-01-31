import React from 'react';
import ProductList from '../productList/ProductList.tsx';
import { ProductInfo } from '../types';
import { queryProducts } from '../productList/products.ts';
import ProductCategories from '../productCategories/ProductCategories.tsx';


const ProductIndex = (props: {query?: string}): JSX.Element => {
    const [products, setProducts] = React.useState<Array<ProductInfo>>([]);
    const [query, setQuery] = React.useState<string>(props.query || 'm%C3%A6lk');

    React.useEffect(() => {
        console.log("updating products to query: " + query);
        queryProducts(query).then((products) => {
            setProducts(products);
        });
    },[props.query, query]);

    return(
        <div className="content">
            <ProductCategories setQuery={setQuery} />
            <ProductList products={products} />
        </div>
    )
}
export default ProductIndex;