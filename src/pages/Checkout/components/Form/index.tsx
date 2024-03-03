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
  onChange: () => void
  addressData?: addressDataProps | null
  isPostalCodeValid?: boolean
}

export function Form({ onChange, addressData, isPostalCodeValid }: FormProps) {

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
            className="half-width"
            type="text"
            placeholder="Número"
            defaultValue=""
            required
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
          <PaymentMethod icon={<CreditCard size={22} />} method="crédito" />
          <PaymentMethod icon={<Bank size={22} />} method="débito" />
          <PaymentMethod icon={<Money size={22} />} method="dinheiro" />
        </PaymentMethods>
      </PaymentContainer>
      <div></div>
    </div>
  )
}
