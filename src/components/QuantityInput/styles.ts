import styled from 'styled-components'

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${({ theme }) => theme.base_button};
  cursor: pointer;
  padding: 0.5rem;
  width: 4.5rem;

  > svg {
    fill: ${({ theme }) => theme.purple};
  }

  input {
    text-align: center;
    width: 1.75rem;
  }

  > input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
