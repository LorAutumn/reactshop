import React, {useContext} from 'react'
import ProductObject from './products/ProductObject'
import CartObject from './products/CartObject'
import {DataContext} from '../App'
import {CartDataContext} from '../App'

// a list of all products that can be ordered (class based)
function ProductList ()  {
  const dataContext = useContext(DataContext)
  const cartDataContext = useContext(CartDataContext)
  



  // adds the input amount of the product to the shopping cart
  const handleClick = (id) => {
    const newData = dataContext.data[id-1]
    console.log(newData)
    console.log('cartData:', cartDataContext.cartData)
    const addToCart = parseInt(document.getElementById(id).value)
    // const cartValue = product.value + addToCart
    cartDataContext.setCartData([...cartDataContext.cartData, newData])
    console.log(cartDataContext.cartData)
  }
  
  
  
  // const handleClick = (id) => {
  //   newData = dataContext.data.map(product => {
  //     const addToCart = parseInt(document.getElementById(id).value)  // reads the value of the input field
  //     const cartValue = product.value + addToCart                    // adds the amount of input field to the amount of the product in the shopping cart
  //     if (id === product.id) {                                       // iterates through the data array and writes the cartValue to each Object
  //       return{
  //         ...product,
  //         value: cartValue
  //       } 
  //     }
  //     // return(                                                        // returns the product array without changes
  //     //   product
  //     // )
  //     console.log('cartValue: ', cartValue)
  //   })
  //   console.log('cartData',cartDataContext.cartData)
  //   console.log('id:',newData[id-1])
  //   console.log(id+1)
  //   console.log('newData: ',newData)  
  //   console.log('data', dataContext.data)
  //   cartDataContext.setCartData([...cartDataContext.cartData, {newData}]) // neuen Eintrag hinzufügen - nicht überschreiben
  // }

  const productComponents = dataContext.data.map(product => 
    <ProductObject 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value} 
      handleClick={handleClick} 
    />
  )

  const cartComponents = cartDataContext.cartData.map(product => 
    <CartObject 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      value={product.value}
    />
  )
    
  return (
  <div className='ProductList' id='list'>
    {/* displays the ProductList component */}
    {productComponents}
    {cartComponents}
  </div>
  )
 
}

export default ProductList