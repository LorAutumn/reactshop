import React from 'react'

function CartObject (props) {
 
  return (
    <ul>
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.price}</li>
      <p>cart: {props.value}</p>
      <hr/>
    </ul>
  )
}

export default CartObject