import React, {useContext} from 'react'
import ProductObject from './products/ProductObject'
import {DataContext, SetDataContext} from '../App'

// a list of all products that can be ordered (class based)
function ProductList ()  {
  const data = useContext(DataContext)
  const setData = useContext(SetDataContext)
  let newData = []

  // adds the input amount of the product to the shopping cart
  const handleClick = (id) => {
    newData = data.map(product => {
      const addToCart = parseInt(document.getElementById(id).value)  // reads the value of the input field
      const cartValue = product.value + addToCart                    // adds the amount of input field to the amount of the product in the shopping cart
      
      if (id === product.id) {                                       // iterates through the data array and writes the cartValue to each Object
        return{
          ...product,
          value: (cartValue)
        }
      }
      return(                                                        // returns the product array without changes
        product
      )
    })
    setData(data => newData)
  }

  const productComponents = data.map(product => 
    <ProductObject 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value} 
      handleClick={handleClick} 
    />
  )
    
  return (
  <div>
    {/* displays the ProductList component */}
    {productComponents}
  </div>
  )
 
}

export default ProductList