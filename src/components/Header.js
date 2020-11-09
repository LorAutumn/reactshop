import React, {useState, useContext} from 'react'
import PopUp from './PopUp'
import {CartDataContext} from '../App'

// displays the page header with h1 and navbar (class based)
function Header(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [seen, setSeen] = useState(false)

  const cartDataContext = useContext(CartDataContext)
  const cartItemsCount = cartDataContext.cartData.length

  const clickHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const togglePop = () => {
    setSeen(!seen)
  }
  
  return(
    <div className='header'>
      <h1>Shop Home</h1>
      <button id='isLoggedIn' onClick={clickHandler}>{isLoggedIn ? 'log out' : 'log in'}</button>
        <div>
          {seen ? <PopUp handleChange={props.handleChange} toggle={togglePop} /> : null}
        </div>
      <button id='addProduct' style={{display: isLoggedIn ? '' : 'none'}} onClick={togglePop}>add Product</button>
      <br/>
      <br/>        
      <nav>
        <ul className='nav'>
          <li className='home'>Home</li>
          <li className='shoppingCart'>Warenkorb ({cartItemsCount})</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

