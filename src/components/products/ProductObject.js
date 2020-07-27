import React from 'react'

function ProductObject(props) {
  // returns a ProductObject a shown in the browser
  return [
    <li>{props.name}</li>,
    <li>{props.price}</li>,
    <hr/>
  ]
}

export default ProductObject