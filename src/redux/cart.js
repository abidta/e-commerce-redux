import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  cartLIst: [],
  cartCount: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state) => {},
    increment: () => {},
    decrement: () => {},
  },
})
export const { addToCart, decrement, increment } = cartSlice.actions
export default cartSlice.reducer
