import React from 'react'
import ProductList from './ProductList'
import Cart from './ShoppingCart'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


// // displays the ProductList (class based)
function Main() {

  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={ProductList} exact/>
          {/* <Route path="/cart" component={Cart} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )

  // return(
  //   <div>
  //   <ProductList/>
  //   <Cart/>
  //   <CartTotalValue/>
  //   </div>
  // )
}

export default Main