import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
/*
const initialState = {
    loading: true,
    error: '',
    post: {}
}

/*
const loadProducts = (state, action) => {
    switch(action.type) {
        case 'FETCH-SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH-ERROR':
            return {
                loading: false,
                error: error.message,
                post: {}
            }
        default:
            return state
    }
}

function DataFetchingTwo() {    
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(`/api/products`)
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR', payload: error.message })
			})
	}, [])
	return (
		state
    )
}

export default {productsState}
*/
