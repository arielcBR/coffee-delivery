import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.base_hover};
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;

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
