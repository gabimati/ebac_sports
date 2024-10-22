import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((favorito) => favorito.id === produto.id)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          adicionarAoCarrinho={adicionarAoCarrinho}
          favoritar={favoritar}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
