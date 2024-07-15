import { useSelector } from 'react-redux'
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'
import { RootReducer } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()
  const favorites = useSelector((state: RootReducer) => state.favorites.items)

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={favorites.some((fav) => fav.id === produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
