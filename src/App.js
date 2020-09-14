import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import productsData from './components/products/productsData'


// displays components (class based)
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: productsData,
      newProductName: '',
      newProductPrice: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.addNewProduct = this.addNewProduct.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.addNewProduct = this.addNewProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.onKeyUp = this.onKeyUp.bind(this)
  }

  // add the value of input element to product.value and updates state (adds amount of product to cart)
  handleClick(id) {
    this.setState(prevState => {
      const updatedData = prevState.data.map(product => {
        if(product.id === id) {
          let addToCart = parseInt(document.getElementById(product.id).value)
          if (addToCart > 0) {
            product.value = (product.value+=addToCart)
            document.getElementById(product.id).value = ''
          }
        }
        return product
      })
      return {
        data: updatedData
      }
    })
    }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state.newProductName)
  }

   // function to add a product to the productList at the PopUp
  addNewProduct(event) {
    const np = [{
      id: this.state.data.length + 1,
      name: this.state.newProductName,
      price: this.state.newProductPrice,
      value: null
    }]
    // add Product !!! update List
    this.setState(state => {
      const data1 = this.state.data.concat(np)
      return(
        state.data = data1
      )
    })
  }

 

  render() {
    return (
      <div>
        <Header addNewProduct={this.addNewProduct} data={this.state.data} clickHandler={this.clickHandler} handleChange={this.handleChange}/>
        <Main data={this.state.data} handleClick={this.handleClick} addNewProduct={this.addNewProduct} />
        <Footer />
      </div>
    )
  }
}

export default App
