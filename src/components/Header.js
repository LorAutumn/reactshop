import React, {useState, useContext} from 'react'
import AddProductPop from './AddProductPop'
import {CartDataContext, HandleChangeContext} from '../App'
import ShoppingCart from './ShoppingCart'

export const ToggleContext = React.createContext()

// displays the page header with h1 and navbar (class based)
function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [seen, setSeen] = useState(false)
  const [seenCart, setSeenCart] = useState(false)

  const cartDataContext = useContext(CartDataContext)
  const cartItemsCount = cartDataContext.cartData.length
  const handleChange = useContext(HandleChangeContext)

  const clickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const togglePop = () => {
    setSeen(!seen)
  }

  const toggleCartPop = () => setSeenCart(!seenCart)
  
  
  return(
    <ToggleContext.Provider value={{togglePop, toggleCartPop}}>
      <header className='header'>
        <div class='container'>
          <div class='header-brand-wrapper'>
            <h1 class='header-brand'>Shop Home</h1>
          </div>
          <div class='header-user-section'>
            <button id='isLoggedIn' onClick={clickHandler}>{isLoggedIn ? 'log out' : 'log in'}</button>
            <button id='addProduct' style={{display: isLoggedIn ? '' : 'none'}} onClick={togglePop}>add Product</button>
          </div>
          <br></br>
          <nav class='header-navbar'>
            <ul class='header-navbar-links'>
              <li class='home'>Home</li>
              <li class='shoppingCart' onClick={toggleCartPop}>Warenkorb ({cartItemsCount})</li>
            </ul>
          </nav>
          <div class='add-product-pop-up'>
              {seen ? <AddProductPop toggle={togglePop} /> : null}
          </div>
          <div class='shopping-cart-pop-up'>
            {seenCart ? <ShoppingCart toggle={toggleCartPop} /> : null}
          </div>        
        </div>
      </header>
      </ToggleContext.Provider>
  )
}

export default Header

