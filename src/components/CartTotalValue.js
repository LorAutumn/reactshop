import React, {useContext, useEffect} from 'react'
import {CartDataContext} from '../App'
import {CartSumContext} from '../App'

function CartTotalValue() {
  const cartDataContext = useContext(CartDataContext)
  const cartSumContext = useContext(CartSumContext)
  const cartData = cartDataContext.cartData
  
  const sumUp = () => {             // calculates the total cart value sum
    let summ = 0
    for (let item of cartData) {
      summ = summ + item.sum
    }
    cartSumContext.setCartSum(cartSumContext.cartSum =+ summ)
  }

  useEffect(() => {               // triggers sumUp on every cartData change to calculate the total cart value
    sumUp()
  }, [cartData])  

  return(
    <div>
      <p>cart total value: {cartSumContext.cartSum} €</p>
    </div>
  )
}

export default CartTotalValue