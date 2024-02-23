import { v4 as uuidv4 } from 'uuid'
import {
  ProductContainer,
  ProductHeader,
  ProductFooter,
  ProductPrice,
  ProductQuantity,
  WrapperProductPrice,
  ProductCurrency,
  WrapperCartButton,
} from './styles'

import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

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
          <ProductPrice>{price}</ProductPrice>
        </WrapperProductPrice>

        <ProductQuantity>
          <Minus size={14} />
          <input type="number" min={1} max={99} step={1} defaultValue="1" />
          <Plus size={14} />
        </ProductQuantity>

        <WrapperCartButton>
          <ShoppingCartSimple size={22} />
        </WrapperCartButton>
      </ProductFooter>
    </ProductContainer>
  )
}
