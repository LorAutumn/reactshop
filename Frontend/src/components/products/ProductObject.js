/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

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
        <ul key={product.id} className='product-object'>
            <Link to={`/${product.id}`}>
                <li>{product.name}</li>
            </Link>
            <li>Art.-Nr.: {product.id}</li>
            <li>{product.price} €</li>
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
    )
}

export default ProductObject
