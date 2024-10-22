import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { useGetProdutosQuery } from './servicos/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { adicionarAoCarrinho, favoritar } from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const adicionarProdutoAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const favoritarProduto = (produto: Produto) => {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarProduto}
          adicionarAoCarrinho={adicionarProdutoAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
