import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritesState = {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.items.find((produto) => produto.id === product.id)) {
        alert('Este produto já foi favoritado')
      } else {
        state.items.push(product)
      }
    }
  }
})

export const { addFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
