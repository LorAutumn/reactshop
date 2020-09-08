import React from 'react'
import PopUp from './PopUp'
import productsData from './products/productsData'

// displays the page header with h1 and navbar (class based)
class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      seen: false,
      data: productsData
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.togglePop = this.togglePop.bind(this)
    // this.addProduct = this.addProduct.bind(this)
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

  // function to add a product to the productList at the PopUp
  addProduct = addProduct => {
    const np = [{
      id: 5,
      name: 'Sessel',
      price: 450,
      value: null
    }]
    // this.setState(state => {
    //   const data1 = state.data.concat(np)
    //   console.log(data1)
    //   data: data1
      // return(
      //   this.state.data = data1
      // )
      const data1 = this.state.data.concat(np)
      this.setState({
        data: data1
    })
    console.log(data1)
    console.log(this.state)
  }
  
  render() {
    return (
      <div className='header'>
        <h1>Shop Home</h1>
        <button id='isLoggedIn' onClick={this.clickHandler}>{this.state.isLoggedIn ? 'log out' : 'log in'}</button>
          <div>
            {this.state.seen ? <PopUp toggle={this.togglePop} addProduct={this.addProduct}  /> : null}
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

