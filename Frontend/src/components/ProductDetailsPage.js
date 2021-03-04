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
        <div classname='product-details-container'>
            <h1 className='product-details-header'>ProductDetails</h1>
            <div className='product-details-wrapper'>
                <div className='item-description'>
                    <ul>
                        <li>{product.id}</li>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                    </ul>
                </div>
                <div className='cart-section'>
                    <ul>
                        <li>add to cart</li>
                        <li>item test</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetailsPage
