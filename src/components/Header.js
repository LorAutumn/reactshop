import React, {useState, useContext} from 'react'
import AddProductPop from './AddProductPop'
import {CartDataContext} from '../App'
import ShoppingCart from './ShoppingCart'

// displays the page header with h1 and navbar (class based)
function Header(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [seen, setSeen] = useState(false)
  const [seenCart, setSeenCart] = useState(false)

  const cartDataContext = useContext(CartDataContext)
  const cartItemsCount = cartDataContext.cartData.length

  const clickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const togglePop = () => {
    setSeen(!seen)
  }

  const toggleCartPop = () => setSeenCart(!seenCart)
  
  
  return(
    <div className='header'>
      <h1>Shop Home</h1>
      <button id='isLoggedIn' onClick={clickHandler}>{isLoggedIn ? 'log out' : 'log in'}</button>
      <button id='addProduct' style={{display: isLoggedIn ? '' : 'none'}} onClick={togglePop}>add Product</button>
        <div>
            {seen ? <AddProductPop handleChange={props.handleChange} toggle={togglePop} /> : null}
        </div>
        <div>
          {seenCart ? <ShoppingCart toggle={toggleCartPop} /> : null}
        </div>      
      <br/>
      <br/>        
      <nav>
        <ul className='nav'>
          <li className='home'>Home</li>
          <li className='shoppingCart' onClick={toggleCartPop}>Warenkorb ({cartItemsCount})</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

