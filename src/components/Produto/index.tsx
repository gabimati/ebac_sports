import * as S from './styles'
import { Produto as ProdutoType } from '../../App'

export const paraReal = (valor: number) => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const Produto = ({
  produto,
  adicionarAoCarrinho,
  favoritar,
  estaNosFavoritos
}: Props) => {
  return (
    <div>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => adicionarAoCarrinho(produto)} type="button">
        Comprar
      </S.BtnComprar>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      </S.BtnComprar>
    </div>
  )
}

export default Produto
