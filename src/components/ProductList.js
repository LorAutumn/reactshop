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
    const addValue = parseInt(document.getElementById(id).value)  // parses the value of the actual dom.element.value of the id's input form
    const findCartItem = cartData.find(item => item.id === id)    // searches and returns an item inside of the Cart by id 
    const newCart = cartData.filter(item => item.id != id)        // filters the actual id-Object out of the cartData Array an writes the filtered array to newCart variable
    
    // checks if item already exits in cart and only updates the Amount-value
    if (findCartItem) {
      findCartItem.value = findCartItem.value + addValue    // sums up the input value in the form and the exisiting value in the cart
      newCart.push(findCartItem)                            // pushes new object of actual item to newCart variable
      cartDataContext.setCartData([...newCart])             // pushes new Cart to the cartData state
    } else {
    cartDataContext.setCartData([...cartDataContext.cartData, {...dataContext.data[id-1], value: addValue}])    // adds a new item (object) to the cartData state (shoppingCart)
      }
    }
  
  // removes an item from the cart
  const removeItem = (id) => {
    const newCart = cartData.filter(item => item.id != id)    // filters the actual id-Object out of the cartData Array an writes the filtered array to newCart variable
    cartDataContext.setCartData([...newCart])                 // pushes new Cart to the cartData state
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
      removeItem={removeItem}
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