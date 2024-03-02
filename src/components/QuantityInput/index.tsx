import { Minus, Plus } from '@phosphor-icons/react'
import { ProductQuantity } from './styles'

interface QuantityInputProps {
  onIncrease?: () => void
  onDecrease?: () => void
  quantity: number
}

export function QuantityInput({
  onDecrease,
  onIncrease,
  quantity,
}: QuantityInputProps) {
  return (
    <ProductQuantity>
      <Minus onClick={onDecrease} size={14} />
      <input type="number" step={1} value={quantity} readOnly />
      <Plus onClick={onIncrease} size={14} />
    </ProductQuantity>
  )
}
