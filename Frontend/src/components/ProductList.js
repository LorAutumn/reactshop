import React, {useContext, useEffect, useReducer, useState, useDispatch} from 'react'
import ProductObject from './products/ProductObject'
import {DataContext, CartDataContext} from '../App'
import {LoadingErrorContext} from './Main'
import Cart from './ShoppingCart'
import axios from 'axios'

// a list of all products that can be ordered (class based)
function ProductList ()  {
  const dataContext = useContext(DataContext)
  const cartDataContext = useContext(CartDataContext)
  const loadingErrorContext = useContext(LoadingErrorContext)
  const cartData = cartDataContext.cartData
  const data = dataContext.data
  const setData = dataContext.setData
  const loading = loadingErrorContext.loading
  const error = loadingErrorContext.error

  
  // adds a product to the cart
  const addToCart = (id) => {                            
    let addValue = parseInt(document.getElementById(id).value)      // parses the value of the actual dom.element.value of the id's input form
    const findCartItem = cartData.find(item => item.id === id)        // searches and returns an item inside of the Cart by id 
    const newCart = cartData.filter(item => item.id !== id)            // filters the actual id-Object out of the cartData Array and writes the filtered array to newCart variable
    const cartItemIndex = cartData.findIndex(item => item.id === id)  // saves the index of the actual item
    const itemSum = dataContext.data[id-1].price * addValue           // sums item price with 
    
    // checks if item already exits in cart and only updates the Amount-value
    if (findCartItem && addValue > 0) {
      findCartItem.value = findCartItem.value + addValue          // sums up the input value of the form field and the exisiting value in the cart
      findCartItem.sum = findCartItem.value * findCartItem.price  // set the total price value of the item
      newCart.splice(cartItemIndex, 0, findCartItem)              // splices new object of actual item to newCart variable
      cartDataContext.setCartData([...newCart])                   // pushes new Cart to the cartData state
      document.getElementById(id).value = null                    // sets input form to null
    } else if (addValue > 0) {
      cartDataContext.setCartData([...cartDataContext.cartData, {...dataContext.data[id-1], value: addValue, sum: itemSum}])    // adds a new item (object) to the cartData state (shoppingCart)
      document.getElementById(id).value = null                                                                                  // sets input form to null
      }
    }
  
  // removes an item from the cart
  const removeItem = (id) => {
    const newCart = cartData.filter(item => item.id !== id)    // filters the actual id-Object out of the cartData Array an writes the filtered array to newCart variable
    cartDataContext.setCartData([...newCart])                 // pushes new Cart to the cartData state
  }

  const productComponents = dataContext.data.map(product => 
    <ProductObject
      product={product}
      addToCart={addToCart} 
    />
  )
    
  return (
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <div className='ProductList'>
      {/* displays the ProductList component */}
      <div className='product-element'>{productComponents}</div>
      <div className='cart-element'><Cart/></div>
    </div>
  )
 
}

export default ProductList