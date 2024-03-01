import styled from 'styled-components'

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${({ theme }) => theme.base_button};
  padding: 0.5rem;
  width: 4.5rem;

  > svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.purple};

    &:disabled {
      opacity: 0.4;
    }

    &:not(:disabled):hover {
      ${({ theme }) => theme.purple_light};
    }
  }

  input {
    text-align: center;
    width: 1.75rem;
  }
`
