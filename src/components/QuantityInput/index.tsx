import { Minus, Plus } from '@phosphor-icons/react'
import { ProductQuantity } from './styles'
import { useEffect, useState } from 'react'

interface QuantityInputProps {
  onQuantityChange: (quantity: string) => void
}

export function QuantityInput({ onQuantityChange }: QuantityInputProps) {
  const [inputManualValue, setInputManualValue] = useState('1')

  function handleDecrement() {
    if (parseInt(inputManualValue) > 1) {
      setInputManualValue((state) => String(parseInt(state) - 1))
    }
  }

  function handleIncrement() {
    if (parseInt(inputManualValue) < 10) {
      setInputManualValue((state) => String(parseInt(state) + 1))
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = event.target.value
    setInputManualValue(newQuantity)
  }

  useEffect(() => {
    onQuantityChange(inputManualValue)
  }, [inputManualValue, onQuantityChange])

  return (
    <ProductQuantity>
      <Minus onClick={handleDecrement} size={14} />
      <input
        type="number"
        step={1}
        value={inputManualValue}
        onChange={handleOnChange}
      />
      <Plus onClick={handleIncrement} size={14} />
    </ProductQuantity>
  )
}
