import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

import { CartProvider } from '../../contexts/CartProvider'

export function DefaultLayout() {
  return (
    <CartProvider>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </CartProvider>
  )
}
