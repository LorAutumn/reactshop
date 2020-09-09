import React from 'react'
import ProductList from './ProductList'

// // displays the ProductList (class based)
class Main extends React.Component {

  render() {
    return (
      <div className='ProductList' id='list'>
        {/* displays the ProductList */}
        <ProductList data={this.props.data} handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default Main