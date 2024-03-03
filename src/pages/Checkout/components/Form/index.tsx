import { useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  InputStyled,
  InputWrapper,
  HeaderAddress,
  PaymentContainer,
  HeaderPayment,
  PaymentMethods,
  ErrorPostalCode,
} from './styles'
import { PaymentMethod } from '../PaymentMethod'

interface addressDataProps {
  street: string
  neighborhood: string
  city: string
  state: string
}

interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  addressData: addressDataProps
  isPostalCodeValid?: boolean
  isNumberAddressValid: (state: boolean) => void
  isPaymentMethodSelected: (state: boolean) => void
}

export function Form({ onChange, addressData, isPostalCodeValid, isPaymentMethodSelected, isNumberAddressValid }: FormProps) {
  const [activePaymentMethod, setActivePaymentMethod] = useState('');
  const [isNumberStreetAddressFiled, setIsNumberStreetAddressFiled] = useState(false)
   
  const handlePaymentMethodClick = (method: string) => {
    setActivePaymentMethod(method);
  }

  function handleNumberInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setIsNumberStreetAddressFiled(!!inputValue)
  }

  isPaymentMethodSelected(activePaymentMethod == '' ? false : true)
  isNumberAddressValid(isNumberStreetAddressFiled)

  return (
    <div>
      <label htmlFor="">Complete seu pedido</label>
      <AddressContainer>
        <HeaderAddress>
          <MapPinLine size={22} weight="fill" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderAddress>
          <ErrorPostalCode >
            {!isPostalCodeValid 
            ? <p>O CEP informado é inválido!</p>
            : <p></p>}
          
        </ErrorPostalCode>
        
        <InputStyled
          name="cep"
          placeholder="CEP"
          defaultValue=""
          onChange={onChange}
          maxLength={8}
          error={!isPostalCodeValid} 
          required
        />
        <InputStyled
          className="full-width"
          type="text"
          placeholder="Rua"
          value={addressData ? addressData.street : ''}
          readOnly
        />
        <InputWrapper>
          <InputStyled
            name="number"
            className="half-width"
            type="text"
            placeholder="Número"
            defaultValue=""
            required
            onChange={handleNumberInputChange}
          />
          <InputStyled
            className="full-width"
            type="text"
            placeholder="Complemento (opcional)"
            defaultValue=""
          />
        </InputWrapper>
        <InputWrapper>
          <InputStyled
            className="half-width"
            type="text"
            placeholder="Bairro"
            readOnly
            value={addressData ? addressData.neighborhood : ''}
          />
          <InputStyled
            className="full-width"
            type="text"
            placeholder="Cidade"
            value={addressData ? addressData.city : ''}
            readOnly
          />
          <InputStyled
            className="small-width"
            type="text"
            placeholder="UF"
            value={addressData ? addressData.state : ''}
            readOnly
          />
        </InputWrapper>
      </AddressContainer>

      <PaymentContainer>
        <HeaderPayment>
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </HeaderPayment>
        <PaymentMethods>
          <PaymentMethod 
            icon={<CreditCard size={22} />} 
            method="crédito" 
            active={activePaymentMethod === 'crédito'}
            onClick={() => handlePaymentMethodClick('crédito')}
          />
          <PaymentMethod 
            icon={<Bank size={22} />} 
            method="débito" 
            active={activePaymentMethod === 'débito'}
            onClick={() => handlePaymentMethodClick('débito')}/>
          <PaymentMethod 
            icon={<Money size={22} />} 
            method="dinheiro"
            active={activePaymentMethod === 'dinheiro'}
            onClick={() => handlePaymentMethodClick('dinheiro')}
          />
        </PaymentMethods>
      </PaymentContainer>
      <div></div>
    </div>
  )
}
