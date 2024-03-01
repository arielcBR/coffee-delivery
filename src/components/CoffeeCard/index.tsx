import { useContext, useState } from 'react'
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

import { CartContext, ProductInterface } from '../../contexts/CartProvider'
import { formatCurrency } from '../../utils/formatCurrency'

export interface coffee {
  id: number
  name: string
  description: string
  photo: string
  price: number
  tags: string[]
}

export interface coffeeProps {
  coffee: coffee
}

export function CoffeeCard({ coffee }: coffeeProps) {
  const { cart, setCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState('1')
  const formattedPrice = formatCurrency(coffee.price)

  function handleAddProductInCart() {
    const newCartItem: ProductInterface = {
      name: coffee.name,
      price: coffee.price,
      quantity,
    }

    setCart((state) => [...state, newCartItem])
  }

  function handleQuantityChange(newQuantity: string) {
    setQuantity(newQuantity)
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

        <QuantityInput onQuantityChange={handleQuantityChange} />

        <WrapperCartButton onClick={handleAddProductInCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </WrapperCartButton>
      </ProductFooter>
    </ProductContainer>
  )
}
