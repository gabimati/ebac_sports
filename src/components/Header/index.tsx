import { Produto } from '../../App'
import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'

type Props = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header = ({ itensNoCarrinho, favoritos }: Props) => {
  const valorTotal = itensNoCarrinho.reduce(
    (total, item) => total + item.preco,
    0
  )

  return (
    <div>
      <span>{favoritos.length} favoritos</span>
      <img src={cesta} alt="Carrinho" />
      <span>
        {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
      </span>
    </div>
  )
}

export default Header
