import React, {useContext} from 'react'
import ProductObject from './products/ProductObject'
import {DataContext} from '../App'
import {CartDataContext} from '../App'

// a list of all products that can be ordered (class based)
function ProductList ()  {
  const dataContext = useContext(DataContext)
  const cartDataContext = useContext(CartDataContext)
  // const setData = useContext(SetDataContext)
  let newData = []

  const productComponents = cartDataContext.cartData.map(product => 
    <ProductObject 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value}
    />
  )
    
  return (
  <div className='ProductList' id='list'>
    {/* displays the ProductList component */}
    <div>
      <h1>Shopping Cart</h1>
      {productComponents}
    </div>
  </div>
  )
 
}

export default ProductList