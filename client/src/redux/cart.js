import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  cartModal: false,
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
        console.log(item._id, action.payload)
        if (item._id === action.payload) {
          item.count++
        }
      })
    },
    decrement: (state, action) => {
      state.cartList.forEach((item, index, array) => {
        if (item._id === action.payload) {
          if (item.count === 1) {
            array.splice(index, 1)
            return
          }
          item.count--
        }
      })
    },
    setCartModal: (state, action) => {
      state.cartModal = action.payload
    },
  },
})
export const { addToCart, decrement, increment, setCartModal } = cartSlice.actions
export default cartSlice.reducer
