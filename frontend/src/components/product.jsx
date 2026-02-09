import React, { useEffect, useState } from 'react'
import fetchProducts from '../helpers/fetch.helper'
import CircularProgress from '@mui/material/CircularProgress';
import ProductName from './ProductName';

function Product() {
    const [products, setProduct] = useState(0)

    useEffect(() => {
        const product = async () => {
            const data = await fetchProducts()
            setProduct(data)
        }
        product()
    }, [])

    return (
        <div>
        
      <div className='grid-cols-4 grid gap-6'>
        {products ? products.map(product => (
          <ProductName name ={product.name}/>
        )) : (<CircularProgress />)}
      </div>
           
        </div>
    )
}

export default Product