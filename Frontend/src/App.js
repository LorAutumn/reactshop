import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
//import productsData from './components/products/productsData/productsData.json'           //uncheck for local data source
import shoppingCartData from './components/products/productsData/shoppingCartData'
import axios from 'axios'

export const DataContext = React.createContext()
export const HandleChangeContext = React.createContext()
export const CartDataContext = React.createContext()
export const CartSumContext = React.createContext()


function App() {

  //const [data, setData] = useState(productsData)          // uncheck for local data source
  const [data, setData] = useState([])                              // state for fetched product data
  const [handleChangeList, setHandleChangeList] = useState({})      // state for list of products available
  const [cartData, setCartData] = useState(shoppingCartData)        // state for items in shopping cart
  const [cartSum, setCartSum] = useState(0)                         // state for cart total sum

  // fetch products data from express server
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('api/products')
      setData(data)
    }
    fetchData()
    return () => {
      //
    }
  }, [])
 
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
