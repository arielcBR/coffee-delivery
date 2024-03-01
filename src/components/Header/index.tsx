import { useContext } from 'react'
import { HeaderContainer, Location, CartContainer } from './styles'
import { MapPinLine, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/images/Logo.svg'

import { CartContext } from '../../contexts/CartProvider'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CartContext)

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
            <ShoppingCart size={22} />
            {!cart.length ? null : <span>{cart.length}</span>}
          </CartContainer>
        </div>
      </nav>
    </HeaderContainer>
  )
}
