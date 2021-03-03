import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App'

function ProductsDetailsPage() {
    const productRouteId = window.location.pathname.slice(1)
    const dataContext = useContext(DataContext)
    const data = dataContext.data
    const [product, setProduct] = useState('hi')

    // sets the details of the actual clicked product as product state
    useEffect(() => {
        setProduct(
            dataContext.data.find(x => x.id === parseInt(productRouteId))
        )
    }, [data])

    // renders the product details page if product exists
    return !product ? (
        <div>loading...</div>
    ) : (
        <div>
            <h1>ProductDetails</h1>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductsDetailsPage
