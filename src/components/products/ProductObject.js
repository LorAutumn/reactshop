import React from 'react'

function ProductObject(props) {
 
  // triggers handleClick at keyPress of 'enter'
  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      props.addToCart(props.id)
    }
  }

  return (
    <ul>
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.price} €</li>
      <input type="number" className="input" id={props.id} onKeyPress={onKeyPress}></input>
      <button onClick={() => props.addToCart(props.id)}>add to cart</button>
      <hr/>
    </ul>
  )
}

export default ProductObject