import { createSlice } from '@reduxjs/toolkit'

export const productSlide = createSlice({
  name: 'product',
  initialState: {
    cart:[]
  },
  reducers: {
    addToCart: (state, action) => {
        state.cart = [...state.cart,action.payload]
      },
      DELETE_ITEM: (state, action) => ({
        ...state,
        cart: [...state.items.splice(0, action.payload), ...state.items.splice(1)],
        lastUpdated: Date.now() 
      })
    
  }
})


export const { addToCart } = productSlide.actions


export default productSlide.reducer