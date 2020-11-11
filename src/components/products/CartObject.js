/* eslint-disable react/prop-types */
import React from 'react'

function CartObject (props) {

  const product = props.product
 
  return (
    <div >
      <ul >
        <li>Artikelnummer: {product.id}</li>
        <li>{product.name}</li>
        <li>{product.price} €</li>
        <p>ammount: {product.value}</p>
        <p>position value: {product.price * product.value} €</p>
        <button onClick={() => props.removeItem(product.id)}>remove from cart</button>
        <hr/>
      </ul>
    </div>
  )
}

export default CartObject