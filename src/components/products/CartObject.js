/* eslint-disable react/prop-types */
import React from 'react'

function CartObject (props) {
 
  return (
    <div className='popup'>
      <ul className='popup-content'>
        <li>Artikelnummer: {props.id}</li>
        <li>{props.name}</li>
        <li>{props.price} €</li>
        <p>ammount: {props.value}</p>
        <p>position value: {props.price * props.value} €</p>
        <button onClick={() => props.removeItem(props.id)}>remove from cart</button>
        <hr/>
      </ul>
    </div>
  )
}

export default CartObject