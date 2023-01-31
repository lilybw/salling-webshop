import React from 'react';
import { ProductInfo } from '../types';
import './ProductList.css';
import ProductThumbnail from '../productThumbnail/ProductThumbnail.tsx';

const ProductList = (props: { products: Array<ProductInfo>}): JSX.Element => {
    return(
        <div className="Product-List">
            <div className="product-grid">
                {props.products.map((product) => {
                    return(
                        <ProductThumbnail product={product} key={product.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList;