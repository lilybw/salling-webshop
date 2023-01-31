import React from 'react';
import { ProductInfo } from '../types';
import './ProductThumbnail.css';

const ProductThumbnail = (props: {product: ProductInfo}): JSX.Element => {
    return(
        <div className="Product-Thumbnail">
            <h2 className="product-title">{props.product.title}</h2>
            <p className="product-price">{props.product.price}</p>
            <img src={props.product.image} alt={props.product.title} className="product-image" />
        </div>
    )
}

export default ProductThumbnail;