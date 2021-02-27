import './featured.css'
import ProductList from '../productList/productList'
import React, {useState, useEffect} from 'react';
function Featured(){
    return(
        <div>
            <h2>Featured Items</h2>
            <ProductList query={"featured"} value={"True"}/>
        </div>
    )
}

export default Featured;