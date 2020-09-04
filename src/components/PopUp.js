import React, {Component} from 'react'

class PopUp extends Component {
  
  handleClick = () => {
    this.props.toggle()
  }
  
  render() {
    return(
      <div className='popup'>
        <div className='popup-content'>
          <span className='close' onClick={this.handleClick}>&times;</span>
          <p>Ich bin ein Popup!!!</p>
          <input type="text" placeholder='product name'/>
          <br/>
          <input type="text" placeholder='price'/>
          <br/>
          <br/>
          <input type="button" value='add product'/>
        </div>
      </div>
    )
  }
}

export default PopUp
