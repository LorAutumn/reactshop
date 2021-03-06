/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function ProductObject(props) {
    const product = props.product

    // triggers handleClick at keyPress of 'enter'
    const onKeyPress = event => {
        if (event.charCode === 13) {
            console.log(product.id)
            props.addToCart(product.id)
        }
    }

    return (
        <BrowserRouter forceRefresh={true}>
            <ul key={product.id} className='product-object'>
                <Link to={`/${product.id}`}>
                    <li>{product.name}</li>
                </Link>
                <li>Art.-Nr.: {product.id}</li>
                <li>{product.price} €</li>
                <li>stock: {product.stockCount}</li>
                <input
                    type='number'
                    className='input'
                    id={product.id}
                    onKeyPress={onKeyPress}></input>
                <button onClick={() => props.addToCart(product.id)}>
                    add to cart
                </button>
                <hr />
            </ul>
        </BrowserRouter>
    )
}

export default ProductObject
