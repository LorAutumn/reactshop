import React from 'react'

class ProductObject extends React.Component {  
  // returns a ProductObject shown in the browser
  
    constructor() {
      super()
      this.state = {
        value: 0
      }
      this.handleClick = this.handleClick.bind(this)
      // this.getElementById = this.getElementById.bind(this)
      this.toLocaleString = this.toLocaleString.bind(this)
    }
      
    handleClick() {
      let amount = document.getElementById('amount').value
      this.setState(prevState => {
        return {
          value: (prevState.value + parseInt(amount))
        }
      }) 
      document.getElementById('amount').value = 0
    }
  
    render() {  
  // FIX: only renders 'cart: value' on first Element
      return (
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.price}</li>
          <input type="number" id="amount" name="amount"></input>
          <button onClick={this.handleClick}>add to cart</button>
          <p>cart: {this.state.value}</p>
          <hr/>
        </ul>
      )
    }
  }

export default ProductObject