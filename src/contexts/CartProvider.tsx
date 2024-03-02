import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartQuantity: number
  deleteItemInCart: (cartItemId: number) => void
  changeItemQuantityInCart: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeItemQuantityInCart(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]

        if (type === 'decrease') {
          if (item.quantity > 1) {
            draft[coffeeExistsInCart].quantity = item.quantity - 1
          }
        } else {
          draft[coffeeExistsInCart].quantity = item.quantity + 1
        }
      }
    })

    setCartItems(newCart)
  }

  function deleteItemInCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) draft.splice(coffeeExistsInCart, 1)
    })
    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeItemQuantityInCart,
        deleteItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
