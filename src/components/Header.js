import React from 'react'

function Header () {
  return (
    <div className='header'>
      <h1>Shop Home</h1>
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