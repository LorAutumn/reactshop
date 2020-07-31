import React from 'react'

// displays the page header with h1 and navbar (class based)
class Header extends React.Component {
  render() {
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
}



export default Header


// displays the page header with h1 and navbar (function based)
// function Header () {
//   return (
//     <div className='header'>
//       <h1>Shop Home</h1>
//       <nav>
//         <ul className='nav'>
//           <li className='home'>Home</li>
//           <li className='shoppingCart'>Warenkorb</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

