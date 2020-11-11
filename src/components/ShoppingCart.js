import React, {useContext} from 'react'
import ProductObject from './products/ProductObject'
import CartObject from './products/CartObject'
import {CartDataContext} from '../App'
import CartTotalValue from './CartTotalValue'

// a list of all products that can be ordered (class based)
function ProductList (props)  {
  const cartDataContext = useContext(CartDataContext)
  const cartData = cartDataContext.cartData

  // removes an item from the cart
  const removeItem = (id) => {
    const newCart = cartData.filter(item => item.id !== id)    // filters the actual id-Object out of the cartData Array an writes the filtered array to newCart variable
    cartDataContext.setCartData([...newCart])                 // pushes new Cart to the cartData state
  }

  const productComponents = cartDataContext.cartData.map(product => 
    <CartObject 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value}
      removeItem={removeItem}
    />
  )

    
  return (
  // <div className='ProductList' id='list'>
    <div className='popup'>
    {/* displays the ProductList component */}
      <div className='popup-content'>
        <span className='close' onClick={props.toggle}>&times;</span>
        <h1>Shopping Cart</h1>
        {productComponents}
        <CartTotalValue />
      </div>
    </div>
  )
 
}

export default ProductList