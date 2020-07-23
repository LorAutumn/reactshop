import React from 'react'
import ProductObject from './products/ProductObject'

// a list of all products that can be ordered
function ProductList() {
  return (
    <div className='ProductList'>
      <p>List of Products:</p>
      <ul id='list'>
        <li><ProductObject product={{name: 'Product 1'}} /></li>
        <li><ProductObject product={{name: 'Product 2'}} /></li>
        <li><ProductObject product={{name: 'Product 2'}} /></li>
      </ul>
    </div>
  )
}

export default ProductList