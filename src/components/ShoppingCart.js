import React, {useContext} from 'react'
import ProductObject from './products/ProductObject'
import CartObject from './products/CartObject'
import {CartDataContext} from '../App'
import CartTotalValue from './CartTotalValue'
import {ToggleContext} from './Header'

// shopping cart wich lists all products added to the cart
function ProductList ()  {
  const cartDataContext = useContext(CartDataContext)
  const cartData = cartDataContext.cartData
  const toggle = useContext(ToggleContext)

  // removes an item from the cart
  const removeItem = (id) => {
    const newCart = cartData.filter(item => item.id !== id)    // filters the actual id-Object out of the cartData Array an writes the filtered array to newCart variable
    cartDataContext.setCartData([...newCart])                 // pushes new Cart to the cartData state
  }

  // maps all products of cartData (Shopping Cart)
  const productComponents = cartDataContext.cartData.map(product => 
    <CartObject 
      product={product} 
      removeItem={removeItem}
    />
  )

    
  return (
  // <div className='ProductList' id='list'>
    <div className='popup'>
    {/* displays the ProductList component */}
      <div className='popup-content'>
        <span className='close' onClick={toggle.toggleCartPop}>&times;</span>
        <h1>Shopping Cart</h1>
        {productComponents}
        <CartTotalValue />
      </div>
    </div>
  )
 
}

export default ProductList