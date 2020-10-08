import React, {useContext} from 'react'
import {DataContext, HandleChangeListContext} from '../App'


function PopUp(props) {
  
  // const {toggle, setToggle} = useState(props)
  // const {handleChange, setHandleChange} = useState(props)

  const data = useContext(DataContext)
  const handleChangeList = useContext(HandleChangeListContext)

  const handleClick = () => {
    props.toggle()
  }

  // writes data of form field to app->state
  const passDownData = (event) => {
    props.handleChange(event)
  }

  const addNewProduct = () => {
    props.setData([ ...data, {
      id: data.length + 1,
      name: handleChangeList.newProductName,
      price: handleChangeList.newProductPrice,
      value: null
      }
    ])
    props.toggle()
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

