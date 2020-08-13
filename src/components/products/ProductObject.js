import React from 'react'

function ProductObject(props) {
 
  return (
    <ul>
      {/* {console.log(this.product.key)} */}
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.price}</li>
      <input type="number" className="input" id={props.id}></input>
      <button onClick={() => props.handleClick(props.id)}>add to cart</button>
      <p>cart: {props.value}</p>
      <hr/>
    </ul>
  )
}

export default ProductObject


// class ProductObject extends React.Component {  
//   // returns a ProductObject shown in the browser
  
 
  
//     render() {  
//   // FIX: only renders 'cart: value' on first Element
//       return (
//         <ul>
//           <li>{this.props.name}</li>
//           <li>{this.props.price}</li>
//           <input type="number" id={this.props.key} name="amount"></input>
//           <button onClick={() => this.props.handleClick(this.props.produc.id)}>add to cart</button>
//           <p>cart: {this.props.value}</p>
//           <hr/>
//         </ul>
//       )
//     }
//   }
