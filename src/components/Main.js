import React from 'react'
import ProductList from './ProductList'


// // displays the ProductList (class based)
function Main (props) {

  return (
    <div className='ProductList' id='list'>
      {/* displays the ProductList */}
      <ProductList />
    </div>
  )
}

export default Main