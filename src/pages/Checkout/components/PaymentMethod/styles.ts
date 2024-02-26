import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  border-radius: 6px;
  background: ${({ theme }) => theme.base_button};
  color: ${({ theme }) => theme.base_text};
  cursor: pointer;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  padding: 1rem;
  width: 11.25rem;

  > svg {
    fill: ${({ theme }) => theme.purple};
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.purple};
    background: ${({ theme }) => theme.purple_light};
  }
`
