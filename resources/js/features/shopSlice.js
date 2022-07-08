import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    id: 0,
    sort: 'sale',
    
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.id = action.payload
    },
    setSort:  (state, action) => {
      state.sort = action.payload
    },
    setAuthorID:  (state, action) => {
      state.id = action.payload
    },
    setBookID:  (state, action) => {
      state.id = action.payload
    }
  }
})


export const { setCategoryId,setSort,setAuthorID,setBookID } = shopSlice.actions


export default shopSlice.reducer

