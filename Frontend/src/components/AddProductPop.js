import React, { useContext } from 'react'
import { DataContext, HandleChangeContext } from '../App'
import { ToggleContext } from './Header'

function AddProductPop(props) {
    const dataContext = useContext(DataContext)
    const handleChange = useContext(HandleChangeContext)
    const toggle = useContext(ToggleContext)

    const handleClick = () => {
        toggle.togglePop()
    }

    // writes data of form field to app->state
    const passDownData = event => {
        handleChange.handleChangeState(event)
    }

    const addNewProduct = () => {
        dataContext.setData([
            ...dataContext.data,
            {
                id: dataContext.data.length + 1,
                name: handleChange.handleChangeList.newProductName,
                price: handleChange.handleChangeList.newProductPrice,
                value: null,
            },
        ])
        toggle.togglePop()
    }

    return (
        <div class='popup-add'>
            <div class='popup-add-content'>
                <span class='close' onClick={handleClick}>
                    &times;
                </span>
                <p>Add a product!</p>
                <input
                    name='newProductName'
                    type='text'
                    placeholder='product name'
                    onChange={passDownData}
                />
                <br />
                <input
                    name='newProductPrice'
                    type='number'
                    placeholder='price'
                    onChange={passDownData}
                />
                <br />
                <br />
                <input
                    name='button'
                    type='button'
                    value='add product'
                    onClick={addNewProduct}
                />
            </div>
            g
        </div>
    )
}

export default AddProductPop
