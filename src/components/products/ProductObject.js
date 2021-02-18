/* eslint-disable react/prop-types */
import React from 'react'

function ProductObject(props) {
 
  const product = props.product

  // triggers handleClick at keyPress of 'enter'
  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      console.log(product.id)
      props.addToCart(product.id)
    }
  }

  return (
    <ul class='product-object'>
      <li>{product.name}</li>
      <li>Art.-Nr.: {product.id}</li>
      <li>{product.price} €</li>
      <input type="number" className="input" id={product.id} onKeyPress={onKeyPress}></input>
      <button onClick={() => props.addToCart(product.id)}>add to cart</button>
      <hr/>
    </ul>
  )
}

export default ProductObject