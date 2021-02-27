import React, { useState, useEffect } from 'react';
import './productList.css'
import Product from './product/product'
import Grid from '@material-ui/core/Grid'
import axios from 'axios';

function ProductList({query,value}) {
    const [products, setProducts] = useState([])
    const url = "http://localhost:8000/ecommerce/product/?"+query+"="+value;
    useEffect(() => {
        axios.get(url)
            .then(response => { return response.data })
            .then((data) => setProducts(data))
    },[value]);
    console.log("bye")
    return (
        <div>
            {
                products?.map((product) =>
                    <Product key={product.id} product={product} />
                )
            }
        </div>
    )
}


export default ProductList;