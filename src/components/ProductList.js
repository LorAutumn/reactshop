import React from 'react'
import ProductObject from './products/ProductObject'
import productsData from './products/productsData'

// a list of all products that can be ordered (class based)
class ProductList extends React.Component {
  constructor() {
    super()
    this.state = {
      data: productsData
    }
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
    console.log(this.state)
    }


  render() {
    // maps productData with ProductObject and props -> returns an array of Objects
    const productComponents = this.state.data.map(product => <ProductObject key={product.id} id={product.id} name={product.name} price={product.price} value={product.value} handleClick={this.handleClick} />)
    
    return (
      <div>
        {/* displays the ProductList component */}
        {productComponents}
      </div>
    ) 
  }
}


export default ProductList


// // a list of all products that can be ordered (function based)
// function ProductList() {
//   // maps productData with ProductObject and props -> returns an array of Objects
//   const productComponents = productsData.map(product => <ProductObject key={product.id} name={product.name} price={product.price} />)
  
//   return (
//     <div>
//       {/* displays the ProductList component */}
//       {productComponents}
//     </div>
//   ) 
// }
