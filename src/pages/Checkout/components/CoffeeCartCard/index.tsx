import {
  CoffeeCardContainer,
  WrapperButtons,
  DeleteProductButton,
} from './styles'
import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/QuantityInput'

import { CartItem } from '../../../../contexts/CartProvider'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeItemQuantityInCart } = useCart()

  const totalPrice = coffee.price * coffee.quantity
  const formattedPrice = formatCurrency(totalPrice)

  function handleIncrease() {
    changeItemQuantityInCart(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeItemQuantityInCart(coffee.id, 'decrease')
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffeeImages/${coffee.photo}`} alt="" />
      <div>
        <p>{coffee.name}</p>
        <WrapperButtons>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={coffee.quantity}
          />
          <DeleteProductButton>
            <Trash size={16} />
            <span>Remover</span>
          </DeleteProductButton>
        </WrapperButtons>
      </div>
      <span>R${formattedPrice}</span>
    </CoffeeCardContainer>
  )
}
