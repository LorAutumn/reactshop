import React, { useContext, useEffect } from 'react'
import { CartDataContext } from '../App'
import { CartSumContext } from '../App'

function CartTotalValue() {
    const cartDataContext = useContext(CartDataContext)
    const cartSumContext = useContext(CartSumContext)
    const cartData = cartDataContext.cartData

    const sumUp = () => {
        // calculates the total cart value sum
        let summ = 0
        for (let item of cartData) {
            summ = summ + item.sum
        }
        cartSumContext.setCartSum((cartSumContext.cartSum = +summ))
    }

    useEffect(sumUp, [cartData])

    return (
        <div className='cart-total-value'>
            <p>cart total value: {cartSumContext.cartSum} €</p>
            <p>vat: {cartSumContext.cartSum * 0.16} €</p>
            <p>total incl. vat (16 %): {cartSumContext.cartSum * 1.16} €</p>
        </div>
    )
}

export default CartTotalValue
