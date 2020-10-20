import React from 'react'

function CartObject (props) {
 
  // triggers handleClick at keyPress of 'enter'
  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      props.handleClick(props.id)
    }
  }

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