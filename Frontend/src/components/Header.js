import React, { useState, useContext } from 'react'
import AddProductPop from './AddProductPop'
import { CartDataContext, HandleChangeContext } from '../App'
import ShoppingCart from './ShoppingCart'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export const ToggleContext = React.createContext()

// displays the page header with h1 and navbar (className based)
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

    return (
        <BrowserRouter forceRefresh={true}>
            <ToggleContext.Provider value={{ togglePop, toggleCartPop }}>
                <header className='header'>
                    <div className='header-brand-wrapper'>
                        <h1 className='header-brand'>Shop Home</h1>
                    </div>
                    <nav className='header-navbar'>
                        <ul className='header-navbar-links'>
                            <Link to='/'>
                                <li className='home'>Home</li>
                            </Link>
                            <Link to='/cart'>
                                <li className='shoppingCart'>
                                    Warenkorb ({cartItemsCount})
                                </li>
                            </Link>
                        </ul>
                    </nav>
                    <div className='header-user-section'>
                        <button id='isLoggedIn' onClick={clickHandler}>
                            {isLoggedIn ? 'log out' : 'log in'}
                        </button>
                        <button
                            id='addProduct'
                            style={{ display: isLoggedIn ? '' : 'none' }}
                            onClick={togglePop}
                        >
                            add Product
                        </button>
                    </div>
                    <br></br>
                    <div className='add-product-pop-up'>
                        {seen ? <AddProductPop toggle={togglePop} /> : null}
                    </div>
                    <div className='shopping-cart-pop-up'>
                        {seenCart ? (
                            <ShoppingCart toggle={toggleCartPop} />
                        ) : null}
                    </div>
                </header>
            </ToggleContext.Provider>
        </BrowserRouter>
    )
}

export default Header

/*
return(
    <ToggleContext.Provider value={{togglePop, toggleCartPop}}>
      <header className='header'>
        <div className='header-brand-wrapper'>
          <h1 className='header-brand'>Shop Home</h1>
        </div>
        <nav className='header-navbar'>
          <ul className='header-navbar-links'>
            <li className='home'>Home</li>
            <li className='shoppingCart' onClick={toggleCartPop}>Warenkorb ({cartItemsCount})</li>
          </ul>
        </nav>
        <div className='header-user-section'>
          <button id='isLoggedIn' onClick={clickHandler}>{isLoggedIn ? 'log out' : 'log in'}</button>
          <button id='addProduct' style={{display: isLoggedIn ? '' : 'none'}} onClick={togglePop}>add Product</button>
        </div>
        <br></br>
        <div className='add-product-pop-up'>
            {seen ? <AddProductPop toggle={togglePop} /> : null}
        </div>
        <div className='shopping-cart-pop-up'>
          {seenCart ? <ShoppingCart toggle={toggleCartPop} /> : null}
        </div> 
      </header>
      </ToggleContext.Provider>
  )
*/
