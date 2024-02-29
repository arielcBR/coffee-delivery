import { Minus, Plus } from '@phosphor-icons/react'
import { ProductQuantity } from './styles'
import { useState } from 'react'

export function QuantityInput() {
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
    setInputManualValue(event.target.value)
  }

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
