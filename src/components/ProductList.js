import React from 'react'
import ProductObject from './products/ProductObject'
import productsData from './products/productsData'

// a list of all products that can be ordered
function ProductList() {
  // maps productData with ProductObject and props
  const productComponents = productsData.map(product => <ProductObject name={product.name} price={product.price} />)
  
  return (
    <div>
      {/* displays the ProductList component */}
      {productComponents}
    </div>
  ) 
}

export default ProductList