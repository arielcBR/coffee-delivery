import { OrderDetailContainer, TotalPriceOrder } from './styles'

import { formatCurrency } from '../../../../utils/formatCurrency'
import { useCart } from '../../../../hooks/useCart'

const DELIVERY_PRICE = 3.5

export function OrderDetail() {
  const { cartItemsPrice, cartQuantity } = useCart()
  const cartTotalPrice = cartItemsPrice + DELIVERY_PRICE

  return (
    <OrderDetailContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {formatCurrency(cartItemsPrice)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>
          R$
          {cartQuantity <= 0 ? 0 : formatCurrency(DELIVERY_PRICE)}
        </span>
      </div>
      <TotalPriceOrder>
        <span>Total</span>
        <span>
          R$
          {cartQuantity <= 0 ? 0 : formatCurrency(cartTotalPrice)}
        </span>
      </TotalPriceOrder>
    </OrderDetailContainer>
  )
}
