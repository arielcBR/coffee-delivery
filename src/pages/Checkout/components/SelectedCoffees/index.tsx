import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <div>
      {cartItems.map((item) => (
        <CoffeeCartCard key={item.id} coffee={item} />
      ))}
    </div>
  )
}
