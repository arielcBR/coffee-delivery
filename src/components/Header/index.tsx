import { HeaderContainer, Location, CartContainer } from './styles'
import { MapPinLine, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/images/Logo.svg'

import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <img
            src={logo}
            alt="copo de café na cor roxa com o nome Coffee delivery"
          />
        </Link>

        <div>
          <Location>
            <MapPinLine size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>

          <CartContainer to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cartQuantity < 1 ? null : <span>{cartQuantity}</span>}
          </CartContainer>
        </div>
      </nav>
    </HeaderContainer>
  )
}
