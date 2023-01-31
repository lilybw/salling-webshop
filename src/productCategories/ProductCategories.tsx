import React from 'react';
import './ProductCategories.css';

const ProductCategories = (props: {setQuery: (query: string) => void}): JSX.Element => {

    return(
        <div className="categories">
            <button className="category-button" onClick={() => props.setQuery("m%C3%A6lk")}>Mælk</button>
            <button className="category-button" onClick={() => props.setQuery("br%C3%B8d")}>Brød</button>
            <button className="category-button" onClick={() => props.setQuery("Delikatessen")}>Delikatessen</button>
            <button className="category-button" onClick={() => props.setQuery("kaffe")}>Kaffe</button>
            <button className="category-button" onClick={() => props.setQuery("m%C3%A6lk")}>Mælk</button>
            <button className="category-button" onClick={() => props.setQuery("br%C3%B8d")}>Brød</button>
            <button className="category-button" onClick={() => props.setQuery("Delikatessen")}>Delikatessen</button>
            <button className="category-button" onClick={() => props.setQuery("kaffe")}>Kaffe</button>
        </div>
    );
}

export default ProductCategories;