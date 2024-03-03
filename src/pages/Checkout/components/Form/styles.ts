import styled, { css } from 'styled-components'

interface InputStyledProps {
  error?: boolean
}

export const InputStyled = styled.input<InputStyledProps>`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.base_button};
  background: ${({ theme }) => theme.base_input};
  margin-bottom: 1rem;
  padding: 0.75rem;
  height: 2.5625rem;

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

  ${({ error }) =>
    error &&
    css`
      border-color: red;
    `}
`
export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
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

  margin-bottom: 1.5rem;

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

export const AddressContainer = styled(SharedContainer)`
  margin-bottom: 0.75rem;
`
export const HeaderAddress = styled(SharedHeader)`
  > svg {
    fill: ${({ theme }) => theme.yellow_dark};
  }
`
export const PaymentContainer = styled(SharedContainer)``

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
export const ErrorPostalCode = styled.div`
  font-size: 0.875rem;
  color: red;
  height: 1rem;
  width: 100%;
`
