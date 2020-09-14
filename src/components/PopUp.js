import React, {Component} from 'react'

class PopUp extends Component {
  constructor() {
    super()
    this.submitNewProduct = this.submitNewProduct.bind(this)
    this.passDownData = this.passDownData.bind(this)
  }
  handleClick = () => {
    this.props.toggle()
  }

  submitNewProduct(event) {
    this.props.addNewProduct(event)
  }

  // writes data of form field to app->state
  passDownData(event) {
    const value = event.target.value
    this.props.handleChange(event)
  }
  
  
  render() {
    return(
      <div className='popup'>
        <div className='popup-content'>
          <span className='close' onClick={this.handleClick}>&times;</span>
          <p>Add a product!</p>
          <input name='newProductName' type="text" placeholder='product name' onChange={this.passDownData}/>
          <br/>
          <input name='newProductPrice' type="text" placeholder='price' onChange={this.passDownData}/>
          <br/>
          <p>{this.props.data}</p>
          <br/>
          <input name='button' type="button" value='add product' onClick={this.submitNewProduct}/>
        </div>
      </div>
    )
  }
}

export default PopUp

