import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push({
        ...action.payload,
        count: 1,
      })
    },
    increment: (state, action) => {
      state.cartList.forEach((item) => {
        console.log(item.id, action.payload)
        if (item.id === action.payload) {
          item.count++
        }
      })
    },
    decrement: (state, action) => {
      state.cartList.forEach((item, index, array) => {
        if (item.id === action.payload) {
          if (item.count === 1) {
            array.splice(index, 1)
            return
          }
          item.count--
        }
      })
    },
  },
})
export const { addToCart, decrement, increment } = cartSlice.actions
export default cartSlice.reducer
