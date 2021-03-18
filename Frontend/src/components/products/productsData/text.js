function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        //-------------------------

        case CART_ADD_ITEM:
            const item = action.payload
            const product = state.cartItems.find(
                x => x.product === item.product
            )
            if (product) {
                return {
                    cartItems: state.cartItems.map(x =>
                        x.product === product.product ? item : x
                    ),
                }
            }
            return { cartItems: [...state.cartItems, item] }

        //-------------------------

        case CART_REMOVE_ITEM:
            return {
                cartItems: state.cartItems.filter(
                    x => x.product !== action.payload
                ),
            }
        default:
            return state
    }
}

export { cartReducer }

import Axios from 'axios'
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get('/api/products/' + productId)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty,
            },
        })
        const {
            cart: { cartItems },
        } = getState()
        Cookie.set('cartItems', JSON.stringify(cartItems))
    } catch (error) {}
}
const removeFromCart = productId => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId })

    const {
        cart: { cartItems },
    } = getState()
    Cookie.set('cartItems', JSON.stringify(cartItems))
}
export { addToCart, removeFromCart }
