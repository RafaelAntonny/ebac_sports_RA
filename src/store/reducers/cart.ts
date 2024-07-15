import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type cartState = {
  items: Produto[]
}

const initialState: cartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.items.find((produto) => produto.id == product.id)) {
        alert('O produto já foi adicionado')
      } else {
        state.items.push(product)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
