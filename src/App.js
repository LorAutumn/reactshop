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
      data: productsData
    }
    this.handleClick = this.handleClick.bind(this)
    this.addNewProduct = this.addNewProduct.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // add the value of input element to product.value and updates state
  handleClick(id) {
    this.setState(prevState => {
      const updatedData = prevState.data.map(product => {
        if(product.id === id) {
          const addToCart = parseInt(document.getElementById(product.id).value)
          product.value = (product.value+=addToCart)
        }
        return product
      })
      return {
        data: updatedData
      }
    })
    }

   // function to add a product to the productList at the PopUp
  addNewProduct() {
    const np = [{
      id: 5,
      name: 'Sessel',
      price: 450,
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
        <Header addNewProduct={this.addNewProduct} data={this.state.data} clickHandler={this.clickHandler}/>
        <Main data={this.state.data} handleClick={this.handleClick} />
        <Footer />
      </div>
    )
  }
}

export default App
