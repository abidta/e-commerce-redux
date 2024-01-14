import { createSlice } from '@reduxjs/toolkit'

const INITIAL_CATEGORY = {
  active: ['watches', 'bags', 'shoes'],
}
const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_CATEGORY,
  reducers: {
    addCategory: (state, action) => {
      state.active.push(action.payload)
    },
    removeCategory: (state, action) => {
      state.active = state.active.filter((val) => val !== action.payload)
    },
  },
})
export const { addCategory, removeCategory } = categorySlice.actions
export default categorySlice.reducer
