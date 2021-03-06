import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import CartObject from './products/CartObject'
import { CartDataContext } from '../App'
import CartTotalValue from './CartTotalValue'
import { ToggleContext } from './Header'
import { Link } from 'react-router-dom'

// shopping cart wich lists all products added to the cart
function ShoppingCart() {
    const cartDataContext = useContext(CartDataContext)
    const cartData = cartDataContext.cartData
    const setCartData = cartDataContext.setCartData
    const toggle = useContext(ToggleContext)
    let cartItems = JSON.parse(Cookies.get('cart'))

    // on initial site load - loads items out of 'cart' cookie into cartData state
    useEffect(() => {
        cartItems = JSON.parse(Cookies.get('cart'))
        setCartData(cartItems)
    }, [])
    // on every cartData state change - loads items out of 'cart' cookie into cartData state
    useEffect(() => {
        Cookies.set('cart', JSON.stringify(cartData), { expires: 2 })
        console.log('test', JSON.parse(Cookies.get('cart')))
        console.log('cart changed')
    }, [cartData])

    // removes an item from the cart
    const removeItem = id => {
        const newCart = cartData.filter(item => item.id !== id) // filters the actual id-Object out of the cartData Array an writes the filtered array to newCart variable
        cartDataContext.setCartData([...newCart]) // pushes new Cart to the cartData state
        console.log('Warenkorb', cartData)
        console.log('newCart', newCart)
    }

    // maps all products of cartData (Shopping Cart)
    const productComponents = cartItems.map(product => (
        <CartObject
            key={product.id}
            product={product}
            removeItem={removeItem}
        />
    ))

    return (
        <div className='shopping-cart'>
            {/* displays the ProductList component */}
            <div className='shopping-cart-content'>
                <h1>Shopping Cart</h1>
                {productComponents}
                <CartTotalValue />
            </div>
        </div>
    )
}

export default ShoppingCart
