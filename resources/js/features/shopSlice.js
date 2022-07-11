import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    id: 0,
    sort: 'sale',
    book_id:0,
    rating_star:0,
    user:{}
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
    },
    setStar:  (state, action) => {
      state.rating_star = action.payload
    },
    setUser:  (state, action) => {
      state.user = action.payload
    },
  }
})


export const { setCategoryId,setSort,setAuthorID,setBookID,setStar,setUser } = shopSlice.actions


export default shopSlice.reducer

