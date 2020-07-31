import React from 'react'
import ProductList from './ProductList'

// // displays the ProductList (class based)
class Main extends React.Component {
  render() {
    return (
      <div className='ProductList' id='list'>
        {/* displays the ProductList */}
        <ProductList />
      </div>
    )
  }
}

export default Main


// // displays the ProductList (function based)
// function Main () {
//   return (
//     <div className='ProductList' id='list'>
//       {/* displays the ProductList */}
//       <ProductList />
//     </div>
//   )
// }