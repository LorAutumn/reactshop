import React from 'react'

function ProductObject(props) {
 
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
      <input type="number" className="input" id={props.id} onKeyPress={onKeyPress}></input>
      <button onClick={() => props.handleClick(props.id)}>add to cart</button>
      <p>cart: {props.value}</p>
      <hr/>
    </ul>
  )
}

export default ProductObject