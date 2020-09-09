import React from 'react'
import ProductObject from './products/ProductObject'

// a list of all products that can be ordered (class based)
class ProductList extends React.Component {
 
  render() {
    // maps productData with ProductObject and props -> returns an array of Objects
    const productComponents = this.props.data.map(product => <ProductObject key={product.id} id={product.id} name={product.name} price={product.price} value={product.value} handleClick={this.props.handleClick} addNewProduct={this.props.addNewProduct} /*onKeyPress={this.props.onKeyPress}*/ />)
    
    return (
      <div>
        {/* displays the ProductList component */}
        {productComponents}
      </div>
    ) 
  }
}

export default ProductList