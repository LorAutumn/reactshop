import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import CartObject from './products/CartObject'
import { CartDataContext } from '../App'
import CartTotalValue from './CartTotalValue'
import { ToggleContext } from './Header'
import { BrowserRouter, Link } from 'react-router-dom'

// shopping cart wich lists all products added to the cart
function ShoppingCart() {
    const cartDataContext = useContext(CartDataContext)
    const cartData = cartDataContext.cartData
    const setCartData = cartDataContext.setCartData
    const toggle = useContext(ToggleContext)
    let cartItems = JSON.parse(Cookies.get('cart'))

    useEffect(() => {
        cartItems = JSON.parse(Cookies.get('cart'))
        setCartData(cartItems)
        console.log('ci', cartItems)
    }, [])
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
    //const productComponents = cartDataContext.cartData.map(product => (
    const productComponents = cartItems.map(product => (
        <CartObject
            key={product.id}
            product={product}
            removeItem={removeItem}
        />
    ))

    return (
        // <div className='ProductList' id='list'>
        <div className='shopping-cart'>
            {/* displays the ProductList component */}
            <div className='shopping-cart-content'>
                <Link to='/'>
                    <span className='close'>&times;</span>
                </Link>
                <h1>Shopping Cart</h1>
                {productComponents}
                <CartTotalValue />
            </div>
        </div>
    )
}

export default ShoppingCart

//<span className='close' onClick={toggle.toggleCartPop}>&times;</span>
