import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../servicos/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
