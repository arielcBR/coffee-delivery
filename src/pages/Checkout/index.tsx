import { CheckoutContainer, FormContainer, CartContainer } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
import { EmptyCart } from './components/EmptyCart'
import { OrderDetail } from './components/OrderDetail'
import { Form } from './components/Form'
import { useCart } from '../../hooks/useCart'
import { searchPostalCode } from '../../utils/searchPostalCode'
import { useState } from 'react'

interface AddressData {
  street: string
  neighborhood: string
  city: string
  state: string
}

export function Checkout() {
  const { cartItems, cartQuantity } = useCart()
  const [addressData, setAddressData] = useState<AddressData | null>(null)
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  async function handleSearchPostalCode(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const cepValidation = /^[0-9]{8}$/
    const postalCode = event.target.value

    if (cepValidation.test(postalCode)) {
      const data = await searchPostalCode(postalCode)

      if (!data.error) {
        setIsPostalCodeValid(true)
        setAddressData({
          street: data.street,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
        })
      }
    } else {
      setIsPostalCodeValid(false)
      setAddressData({
        street: '',
        neighborhood: '',
        city: '',
        state: '',
      })
    }
  }

  return (
    <CheckoutContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Form
          onChange={handleSearchPostalCode}
          addressData={addressData}
          isPostalCodeValid={isPostalCodeValid}
        />
        <div>
          <label htmlFor="">Cafés selecionados</label>
          <CartContainer>
            {cartItems.length > 0 ? <SelectedCoffees /> : <EmptyCart />}

            <OrderDetail />

            <button
              disabled={cartQuantity <= 0 || !isPostalCodeValid}
              type="submit"
            >
              Confirmar pedido
            </button>
          </CartContainer>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}
