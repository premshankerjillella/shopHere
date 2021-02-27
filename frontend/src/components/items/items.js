import React, {useState, useEffect} from 'react';
import ProductList from '../productList/productList'
// import {useSearch} from '../../SearchContext'
const Items = props=> {
    const params = new Map(props.location.search.slice(1).split('&').map(kv => kv.split('=')))
    console.log(params.get('q'));
    return (
        <div>
             <ProductList query="search" value={params.get('q')}/>
        </div>
    );
}

export default Items;