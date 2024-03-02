import { useState } from 'react'
import {
  ProductContainer,
  ProductHeader,
  ProductFooter,
  ProductPrice,
  WrapperProductPrice,
  ProductCurrency,
  WrapperCartButton,
} from './styles'

import { ShoppingCartSimple } from '@phosphor-icons/react'
import { QuantityInput } from '../QuantityInput'

import { formatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../hooks/useCart'

export interface Coffee {
  id: number
  name: string
  description: string
  photo: string
  price: number
  tags: string[]
}

export interface coffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: coffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const formattedPrice = formatCurrency(coffee.price)

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  function handleIncrement() {
    if (quantity < 10) {
      setQuantity((state) => state + 1)
    }
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <ProductContainer>
      <ProductHeader>
        <img src={`/coffeeImages/${coffee.photo}`} alt="" />
        <div>
          {coffee.tags.map((tag) => {
            return <span key={`${coffee.id}-${tag}`}>{tag}</span>
          })}
        </div>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </ProductHeader>

      <ProductFooter>
        <WrapperProductPrice>
          <ProductCurrency>R$</ProductCurrency>
          <ProductPrice>{formattedPrice}</ProductPrice>
        </WrapperProductPrice>

        <QuantityInput
          onIncrease={handleIncrement}
          onDecrease={handleDecrement}
          quantity={quantity}
        />

        <WrapperCartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </WrapperCartButton>
      </ProductFooter>
    </ProductContainer>
  )
}
