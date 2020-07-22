import React from 'react'

// a list of all products that can be ordered
function ProductList() {
  return (
    <div className='ProductList'>
      <p>List of Products:</p>
      <ul id='list'>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  )
}

export default ProductList