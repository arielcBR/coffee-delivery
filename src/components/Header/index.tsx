import { useContext } from 'react'
import { HeaderContainer, Location, CartContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/images/Logo.svg'

import { CartContext } from '../../contexts/CartProvider'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <nav>
        <img
          src={logo}
          alt="copo de café na cor roxa com o nome Coffee delivery"
        />

        <div>
          <Location>
            <MapPin size={22} />
            <span>Porto Alegre, RS</span>
          </Location>

          <CartContainer>
            <ShoppingCart size={22} />
            {!cart.length ? null : <span>{cart.length}</span>}
          </CartContainer>
        </div>
      </nav>
    </HeaderContainer>
  )
}
