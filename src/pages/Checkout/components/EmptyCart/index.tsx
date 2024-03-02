import { SmileySad } from '@phosphor-icons/react'
import { EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h3>Carrinho vazio</h3>
      <SmileySad size={24} weight="fill" />
    </EmptyCartContainer>
  )
}
