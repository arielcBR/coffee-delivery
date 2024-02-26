import { v4 as uuidv4 } from 'uuid'
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

interface productProps {
  picture: string
  title: string
  tags: string[]
  description: string
  price: number
}

export function Product({
  picture,
  title,
  tags,
  description,
  price,
}: productProps) {
  const formattedPrice = (price: number) => {
    let formattedString = price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return (formattedString = formattedString.replace('R$', ''))
  }

  return (
    <ProductContainer>
      <ProductHeader>
        <img src={picture} alt="" />
        <div>
          {tags.map((tag) => {
            return <span key={uuidv4()}>{tag}</span>
          })}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </ProductHeader>

      <ProductFooter>
        <WrapperProductPrice>
          <ProductCurrency>R$</ProductCurrency>
          <ProductPrice>{formattedPrice(price)}</ProductPrice>
        </WrapperProductPrice>

        <QuantityInput />

        <WrapperCartButton>
          <ShoppingCartSimple size={22} />
        </WrapperCartButton>
      </ProductFooter>
    </ProductContainer>
  )
}
