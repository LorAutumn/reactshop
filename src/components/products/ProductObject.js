import React from 'react'

function ProductObject(props) {
  return [
    <li>{props.product.name}</li>,
    <li>{props.product.price}</li>,
    <hr/>
  ]
}

export default ProductObject