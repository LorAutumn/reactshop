import React, {useContext} from 'react'
import {DataContext} from '../App'

function ProductsDetailsPage () {
    const dataContext = useContext(DataContext)
    const data = dataContext.data
    console.log('data', data)

    return(
        <div>
            <h1>ProductDetails</h1>
            <p>{data.name}</p>
        </div>
    )
}

export default ProductsDetailsPage