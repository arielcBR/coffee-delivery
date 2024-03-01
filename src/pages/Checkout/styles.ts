import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 13rem;

  label {
    color: ${({ theme }) => theme.base_subtitle};
    display: inline-block;
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`
export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 1rem;
`

export const SharedContainer = styled.div`
  border-radius: 6px;
  background: ${({ theme }) => theme.base_card};
  padding: 2.5rem;
`

export const SharedHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  > div {
    > h3 {
      color: ${({ theme }) => theme.base_subtitle};
      line-height: 130%;
    }

    > p {
      color: ${({ theme }) => theme.base_text};
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`

export const InputStyled = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.base_button};
  background: ${({ theme }) => theme.base_input};
  margin-bottom: 1rem;
  padding: 0.75rem;

  &.half-width {
    width: 12.5rem;
  }

  &.small-width {
    width: 3.75rem;
  }

  &.full-width {
    width: 100%;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const AddressContainer = styled(SharedContainer)`
  margin-bottom: 0.75rem;
`

export const PaymentContainer = styled(SharedContainer)``

export const CartContainer = styled(SharedContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem;

  > button {
    background: ${({ theme }) => theme.yellow};
    border: none;
    border-radius: 6px;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    padding: 0.75rem 0.5rem;
    text-transform: uppercase;
    text-align: center;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.yellow_dark};
    }
  }
`

export const HeaderAddress = styled(SharedHeader)`
  > svg {
    fill: ${({ theme }) => theme.yellow_dark};
  }
`

export const HeaderPayment = styled(SharedHeader)`
  margin-bottom: 2rem;

  > svg {
    fill: ${({ theme }) => theme.purple};
  }
`
export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const ProductInCart = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin-right: 1.25rem;
    height: 4rem;
    width: 4rem;
  }

  > div {
    > p {
      color: ${({ theme }) => theme.base_subtitle};
      line-height: 130%;
      margin-bottom: 0.5rem;
    }
  }

  > span {
    align-self: flex-start;
    font-weight: 700;
    line-height: 130%;
    margin-left: auto;
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const DeleteProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;
  box-shadow: none;
  background: ${({ theme }) => theme.base_button};
  cursor: pointer;
  padding: 0.5rem;

  > svg {
    fill: ${({ theme }) => theme.purple};
  }

  > span {
    color: ${({ theme }) => theme.base_text};
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const Divider = styled.div`
  background: ${({ theme }) => theme.base_hover};
  margin: 1.5rem auto;
  height: 1px;
  width: 100%;
`

export const OrderDetail = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.base_text};
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: 0.875rem;
  }
`

export const TotalPriceOrder = styled.div`
  > span {
    color: ${({ theme }) => theme.base_subtitle};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`
