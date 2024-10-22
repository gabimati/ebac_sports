import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { adicionarAoCarrinho } from './store/reducers/carrinho'
import { adicionarFavorito } from './store/reducers/favoritos'
import { useGetProdutosQuery } from './servicos/api'

function App() {
  const dispatch = useDispatch()

  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  function adicionarProdutoAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritarProduto(produto: Produto) {
    dispatch(adicionarFavorito(produto))
  }

  if (isLoading) return <p>Carregando produtos...</p>

  return (
    <div className="container">
      <Header itensNoCarrinho={carrinho} favoritos={favoritos} />
      <Produtos
        produtos={produtos}
        adicionarAoCarrinho={adicionarProdutoAoCarrinho}
        favoritos={favoritos}
        favoritar={favoritarProduto}
      />
    </div>
  )
}

export type Produto = {
  id: number
  nome: string
  preco: number
}

export default App
