import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './features/shopSlice'
import productReducer from './features/product'


export default configureStore({
  reducer: {
    shopReducer: shopReducer,
    productReducer : productReducer

  }
})