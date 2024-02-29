import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

export interface ProductInterface {
  name: string
  price: number
  quantity: string
}

interface CartContextValue {
  cart: ProductInterface[]
  setCart: Dispatch<SetStateAction<ProductInterface[]>>
  quantityItem: number
  setQuantityItem: Dispatch<SetStateAction<number>>
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  setCart: () => {},
  quantityItem: 0,
  setQuantityItem: () => {},
})

export function CartProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<ProductInterface[]>([])
  const [quantityItem, setQuantityItem] = useState<number>(0)

  const contextValue: CartContextValue = {
    cart,
    setCart,
    quantityItem,
    setQuantityItem,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
