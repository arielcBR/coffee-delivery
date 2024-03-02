import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartItemsPrice: number
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

const COFFEE_ITEMS_STORAGE = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartContextProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

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

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeItemQuantityInCart,
        deleteItemInCart,
        cartItemsPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
