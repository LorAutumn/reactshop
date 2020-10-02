import React, {useState} from 'react'
import PopUp from './PopUp'
import {DataContext} from '../App'

// displays the page header with h1 and navbar (class based)
function Header(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [seen, setSeen] = useState(false)

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
          {seen ? <PopUp handleChange={props.handleChange} toggle={togglePop} setData={props.setData} /> : null}
        </div>
      <button id='addProduct' style={{display: isLoggedIn ? '' : 'none'}} onClick={togglePop}>add Product</button>
      <br/>
      <br/>        
      <nav>
        <ul className='nav'>
          <li className='home'>Home</li>
          <li className='shoppingCart'>Warenkorb</li>
        </ul>
      </nav>
    </div>
  )

}

export default Header

