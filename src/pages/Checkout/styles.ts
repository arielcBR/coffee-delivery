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
