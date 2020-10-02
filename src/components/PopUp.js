import React, {useState, useContext} from 'react'
import {DataContext, HandleChangeContext} from '../App'


function PopUp(props) {
  
  const {toggle, setToggle} = useState(props)
  const {handleChange, setHandleChange} = useState(props)

  const data = useContext(DataContext)
  const handleChangeList = useContext(HandleChangeContext)

  const handleClick = () => {
    props.toggle()
  }

  const submitNewProduct = (event) => {
    addNewProduct(event)
    toggle()
  }

  // writes data of form field to app->state
  const passDownData = (event) => {
    // const value = event.target.value
    props.handleChange(event)
  }

  const addNewProduct = (event) => {
    props.setData([ ...data, {
      id: data.length,
      name: handleChangeList.newProductName,
      price: handleChangeList.newProductPrice,
      value: null
      }
    ])
  }
  
  
  return(
    <div className='popup'>
      <div className='popup-content'>
        <span className='close' onClick={handleClick}>&times;</span>
        <p>Add a product!</p>
        <input name='newProductName' type="text" placeholder='product name' onChange={passDownData}/>
        <br/>
        <input name='newProductPrice' type="number" placeholder='price' onChange={passDownData}/>
        <br/>
        {/* <p>{data}</p> */}
        <br/>
        <input name='button' type="button" value='add product' onClick={addNewProduct}/>
      </div>
    </div>
  )
}


export default PopUp

