import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import productsData from './components/products/productsData/productsData.json'
import shoppingCartData from './components/products/productsData/shoppingCartData'

export const DataContext = React.createContext()
export const HandleChangeContext = React.createContext()
export const CartDataContext = React.createContext()
export const CartSumContext = React.createContext()


function App() {

  const [data, setData] = useState(productsData)                    // state for data
  const [handleChangeList, setHandleChangeList] = useState({})      // state for list of products available
  const [cartData, setCartData] = useState(shoppingCartData)        // state for items in shopping cart
  const [cartSum, setCartSum] = useState(0)                         // state for cart total sum
 
  // container for handleChange state deposit (temp)
  const handleChange = (event) => {
    const {name, value} = event.target
    setHandleChangeList({...handleChangeList, [name]: value})
  }
  
  return(
    <div>
        <DataContext.Provider value={{data: data, setData: setData}}>
            <HandleChangeContext.Provider value={{handleChangeState: handleChange, handleChangeList: handleChangeList}}>
              <CartDataContext.Provider value={{cartData: cartData, setCartData: setCartData}}>
                <CartSumContext.Provider value={{cartSum: cartSum, setCartSum: setCartSum}}>
                  <div className="grid-container">
                    <div className="header-index">
                      <Header/>
                    </div>
                    <div className="main-index">
                      <Main />
                    </div>
                    <div className="footer-index">
                      <Footer />
                    </div>
                  </div>
                </CartSumContext.Provider>
              </CartDataContext.Provider>
            </ HandleChangeContext.Provider>
          {/* </ SetDataContext.Provider>   */}
        </ DataContext.Provider>
    </div>
  )

}

export default App
