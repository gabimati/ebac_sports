import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.itens.find(
        (item) => item.id === action.payload.id
      )
      if (!produtoExiste) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.favoritos.find(
        (item) => item.id === action.payload.id
      )
      if (produtoExiste) {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
