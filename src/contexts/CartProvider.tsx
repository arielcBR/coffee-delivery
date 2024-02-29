import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartContextValue {
  cart: Product[]
  setCart: Dispatch<SetStateAction<Product[]>> // Tipo para setCart
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  setCart: () => {}, // Definindo um valor padrão para evitar erros de tipo
})

export function CartProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<Product[]>([])

  const contextValue: CartContextValue = {
    cart,
    setCart,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
