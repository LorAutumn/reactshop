import React from 'react'

function ProductObject(props) {
 
  return (
    <ul>
      {/* {console.log(this.product.key)} */}
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.price}</li>
      <input type="number" className="input" id={props.id}></input>
      <button onClick={() => props.handleClick(props.id)}>add to cart</button>
      <p>cart: {props.value}</p>
      <hr/>
    </ul>
  )
}

export default ProductObject