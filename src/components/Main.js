import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductList from './ProductList'
import Cart from './ShoppingCart'
import ShoppingCart from './ShoppingCart'


// // displays the ProductList (class based)
function Main() {

  return(
    <BrowserRouter>
      <div className='main'>
        <Switch>
          <Route path="/" component={ProductList} exact />
          <Route path="/cart" component={Cart} exact/>
          {/* <Route path="/cart" component={Cart} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Main