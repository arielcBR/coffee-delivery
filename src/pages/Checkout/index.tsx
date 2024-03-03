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
  error?: boolean
}

export function Checkout() {
  const { cartItems, cartQuantity } = useCart()
  const [addressData, setAddressData] = useState<AddressData>({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    error: true,
  })
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false)
  const [isNumberStreetAddressFilled, setIsNumberStreetAddressFilled] =
    useState(false)
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false)

  const disableButtonSubmit = !(
    isPostalCodeValid &&
    isNumberStreetAddressFilled &&
    isPaymentMethodSelected &&
    cartQuantity > 0
  )

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

  function handlePaymentMethodSelected(state: boolean) {
    setIsPaymentMethodSelected(state)
  }

  function handleNumberStreetAddressfilled(state: boolean) {
    setIsNumberStreetAddressFilled(state)
  }

  return (
    <CheckoutContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Form
          onChange={handleSearchPostalCode}
          addressData={addressData}
          isPostalCodeValid={isPostalCodeValid}
          isNumberAddressValid={handleNumberStreetAddressfilled}
          isPaymentMethodSelected={handlePaymentMethodSelected}
        />
        <div>
          <label htmlFor="">Cafés selecionados</label>
          <CartContainer>
            {cartItems.length > 0 ? <SelectedCoffees /> : <EmptyCart />}
            <OrderDetail />
            <button disabled={disableButtonSubmit} type="submit">
              Confirmar pedido
            </button>
          </CartContainer>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}
