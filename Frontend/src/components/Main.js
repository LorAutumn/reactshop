import React, { useContext, useEffect, useState, useDispatch } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import Cart from './ShoppingCart'
import ProductDetailsPage from './ProductDetailsPage'
import { DataContext } from '../App'
import { CartDataContext } from '../App'
import axios from 'axios'

export const LoadingErrorContext = React.createContext()

// // displays the ProductList (class based)
function Main() {
    const dataContext = useContext(DataContext)
    const cartDataContext = useContext(CartDataContext)
    const data = dataContext.data
    const setData = dataContext.setData
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // handles api fetch on site load
    useEffect(() => {
        axios
            .get('/api/products')
            .then(response => {
                setLoading(false)
                setData(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setError('something went wrong')
            })
    }, [])

    return (
        <BrowserRouter>
            <LoadingErrorContext.Provider
                value={{ loading: loading, error: error }}>
                <div className='main'>
                    <Switch>
                        <Route path='/' component={ProductList} exact />
                        <Route path='/cart' component={Cart} exact />
                        <Route
                            path='/:id'
                            component={ProductDetailsPage}
                            exact
                        />
                    </Switch>
                </div>
            </LoadingErrorContext.Provider>
        </BrowserRouter>
    )
}

export default Main
