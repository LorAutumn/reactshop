import React, {useContext} from 'react'
import ProductObject from './products/ProductObject'
import CartObject from './products/CartObject'
import {DataContext} from '../App'
import {CartDataContext} from '../App'

// a list of all products that can be ordered (class based)
function ProductList ()  {
  const dataContext = useContext(DataContext)
  const cartDataContext = useContext(CartDataContext)
  const cartData = cartDataContext.cartData
  
  
  
  // adds a product to the cart
  const addToCart = (id) => {                            
    const addValue = parseInt(document.getElementById(id).value)
    const findCartItem = cartData.find(item => item.id === id) // searches and returns an item inside of the Cart by id 
    const newCart = cartData.filter(item => item.id != id)
    
    // checks if item already exits in cart and only updates the Amount-value
    if (findCartItem) {
      findCartItem.value = findCartItem.value + addValue    // sums up the input value in the form and the exisiting value in the cart
      newCart.push(findCartItem)                            // pushes new object of actual item to newCart variable
      cartDataContext.setCartData([...newCart])             // pushes new Cart to the cartData state
    } else {
    cartDataContext.setCartData([...cartDataContext.cartData, {...dataContext.data[id-1], value: addValue}])    // adds a new item (object) to the cartData state (shoppingCart)
      }
    }

 
  const productComponents = dataContext.data.map(product => 
    <ProductObject 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value} 
      addToCart={addToCart} 
    />
  )

  const cartComponents = cartDataContext.cartData.map(product => 
    <CartObject 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value}
    />
  )
    
  return (
  <div className='ProductList' id='list'>
    {/* displays the ProductList component */}
    {productComponents}
    {cartComponents}
  </div>
  )
 
}

export default ProductList