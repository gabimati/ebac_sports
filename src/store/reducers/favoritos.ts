import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      const favoritoExiste = state.itens.find(
        (produto) => produto.id === action.payload.id
      )
      if (!favoritoExiste) {
        state.itens.push(action.payload)
      } else {
        state.itens = state.itens.filter(
          (produto) => produto.id !== action.payload.id
        )
      }
    }
  }
})

export const { adicionarFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
