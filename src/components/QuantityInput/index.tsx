import { Minus, Plus } from '@phosphor-icons/react'
import { ProductQuantity } from './styles'

export function QuantityInput() {
  return (
    <ProductQuantity>
      <Minus size={14} />
      <input type="number" min={1} max={99} step={1} defaultValue="1" />
      <Plus size={14} />
    </ProductQuantity>
  )
}
