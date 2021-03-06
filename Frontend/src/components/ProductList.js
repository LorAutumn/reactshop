import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import ProductObject from './products/ProductObject'
import { DataContext, CartDataContext } from '../App'
import { LoadingErrorContext } from './Main'
import Cart from './ShoppingCart'

// a list of all products that can be ordered (class based)
function ProductList() {
    const dataContext = useContext(DataContext)
    const cartDataContext = useContext(CartDataContext)
    const loadingErrorContext = useContext(LoadingErrorContext)
    const cartData = cartDataContext.cartData
    const data = dataContext.data
    const setData = dataContext.setData
    const loading = loadingErrorContext.loading
    const error = loadingErrorContext.error
    const stockCount = data.stockCount

    // adds a product to the cart
    const addToCart = id => {
        let addValue = parseInt(document.getElementById(id).value) // parses the value of the actual dom.element.value of the id's input form
        const findCartItem = cartData.find(item => item.id === id) // searches and returns an item inside of the Cart by id
        const findItem = data.find(item => item.id === id)
        const newCart = cartData.filter(item => item.id !== id) // filters the actual id-Object out of the cartData Array and writes the filtered array to newCart variable
        const cartItemIndex = cartData.findIndex(item => item.id === id) // saves the index of the actual item
        const itemSum = dataContext.data[id - 1].price * addValue // sums item price with

        if (addValue > 0) {
            // checks if item already exits in cart and only updates the Amount-value
            if (
                findCartItem &&
                addValue > 0 &&
                findItem.stockCount >= addValue
            ) {
                findCartItem.value = findCartItem.value + addValue // sums up the input value of the form field and the exisiting value in the cart
                findCartItem.sum = findCartItem.value * findCartItem.price // set the total price value of the item
                newCart.splice(cartItemIndex, 0, findCartItem) // splices new object of actual item to newCart variable
                if (findCartItem.value > findCartItem.stockCount) {
                    alert('out of stock')
                } else cartDataContext.setCartData([...newCart]) // pushes new Cart to the cartData state
            } else if (
                addValue > 0 &&
                findItem.stockCount >= addValue + findItem.value
            ) {
                cartDataContext.setCartData([
                    ...cartDataContext.cartData,
                    {
                        ...dataContext.data[id - 1],
                        value: addValue,
                        sum: itemSum,
                    },
                ]) // adds a new item (object) to the cartData state (shoppingCart)
                Cookies.set('cart', JSON.stringify(cartData), { expires: 2 })
                cartData ? console.log('cdata', cartData) : console.log('error')
                document.getElementById(id).value = null // sets input form to null
            } else alert('Out of stock')
        } else alert('please insert a number > 0')
    }

    //sets every cart change to the 'cart' cookie
    useEffect(() => {
        Cookies.set('cart', JSON.stringify(cartData), { expires: 2 })
        console.log('test', JSON.parse(Cookies.get('cart')))
        console.log('cart changed')
    }, [cartData])

    // maps products from productList
    const productComponents = dataContext.data.map(product => (
        <ProductObject
            key={product.id}
            product={product}
            addToCart={addToCart}
        />
    ))

    return loading ? (
        <div>Loading...</div>
    ) : error ? (
        <div>{error}</div>
    ) : (
        <div className='ProductList'>
            {/* displays the ProductList component */}
            <div className='product-element'>{productComponents}</div>
            <div className='cart-element'>
                <Cart />
            </div>
        </div>
    )
}

export default ProductList
