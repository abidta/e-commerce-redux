import {configureStore}from '@reduxjs/toolkit'
import cartReducer from './cart'
import categoryReducer from './category'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        category:categoryReducer
    }
})