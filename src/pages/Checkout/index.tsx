import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  CheckoutContainer,
  FormContainer,
  AddressContainer,
  InputStyled,
  InputWrapper,
  HeaderAddress,
  PaymentContainer,
  HeaderPayment,
  PaymentMethods,
  CartContainer,
  ProductInCart,
  Divider,
  WrapperButtons,
  DeleteProductButton,
  OrderDetail,
  TotalPriceOrder,
} from './styles'
import { PaymentMethod } from './components/PaymentMethod'
import { QuantityInput } from '../../components/QuantityInput'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer action="">
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
            <InputStyled
              type="number"
              placeholder="CEP"
              defaultValue=""
              pattern="[0-9]{8}"
              required
            />
            <InputStyled
              className="full-width"
              type="text"
              placeholder="Rua"
              defaultValue=""
              required
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
                defaultValue=""
                required
              />
              <InputStyled
                className="full-width"
                type="text"
                placeholder="Cidade"
                defaultValue=""
                required
              />
              <InputStyled
                className="small-width"
                type="text"
                placeholder="UF"
                defaultValue=""
                required
              />
            </InputWrapper>
          </AddressContainer>

          <PaymentContainer>
            <HeaderPayment>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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

        <div>
          <label htmlFor="">Cafés selecionados</label>
          <CartContainer>
            <div>
              <ProductInCart>
                <img src="../../../public/coffeeImages/americano.png" alt="" />
                <div>
                  <p>Expresso Tradicional</p>
                  <WrapperButtons>
                    <QuantityInput />
                    <DeleteProductButton>
                      <Trash size={16} />
                      <span>Remover</span>
                    </DeleteProductButton>
                  </WrapperButtons>
                </div>
                <span>R$9,90</span>
              </ProductInCart>
              <Divider />
              <ProductInCart>
                <img src="../../../public/coffeeImages/americano.png" alt="" />
                <div>
                  <p>Latte</p>
                  <WrapperButtons>
                    <QuantityInput />
                    <DeleteProductButton>
                      <Trash size={16} />
                      <span>Remover</span>
                    </DeleteProductButton>
                  </WrapperButtons>
                </div>
                <span>R$9,90</span>
              </ProductInCart>
              <Divider />
            </div>
            <OrderDetail>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <TotalPriceOrder>
                <span>Total</span>
                <span>R$ 33,20</span>
              </TotalPriceOrder>
            </OrderDetail>
            <button type="submit">Confirmar pedido</button>
          </CartContainer>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}
