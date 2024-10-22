import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produtoExiste = state.itens.find(
        (produto) => produto.id === action.payload.id
      )
      if (!produtoExiste) {
        state.itens.push(action.payload)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter(
        (produto) => produto.id !== action.payload
      )
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
