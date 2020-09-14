import React from 'react'
import PopUp from './PopUp'

// displays the page header with h1 and navbar (class based)
class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      seen: false,
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.togglePop = this.togglePop.bind(this)
  }

  // toggles isLoggedIn true / false
  clickHandler() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  // toggles state of seen ( if PopUp for product adding is seen or not)
  togglePop() {
    this.setState({
      seen: !this.state.seen
    })
  }
  
  
  render() {
    return (
      <div className='header'>
        <h1>Shop Home</h1>
        <button id='isLoggedIn' onClick={this.clickHandler}>{this.state.isLoggedIn ? 'log out' : 'log in'}</button>
          <div>
            {this.state.seen ? <PopUp toggle={this.togglePop} addNewProduct={this.props.addNewProduct} handleChange={this.props.handleChange}  /> : null}
          </div>
        <button id='addProduct' style={{display: this.state.isLoggedIn ? '' : 'none'}} onClick={this.togglePop}>add Product</button>
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

