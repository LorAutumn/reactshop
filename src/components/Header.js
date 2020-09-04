import React from 'react'

// displays the page header with h1 and navbar (class based)
class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }
  
  render() {
    return (
      <div className='header'>
        <h1>Shop Home</h1>
    <button id='isLoggedIn' onClick={this.clickHandler}>{this.state.isLoggedIn ? 'log out' : 'log in'}</button>
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

