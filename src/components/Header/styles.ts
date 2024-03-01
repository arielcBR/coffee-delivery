import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.background};
  margin: 0 auto;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 5.3125rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`

export const Location = styled.div`
  background: ${({ theme }) => theme.purple_light};
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  > svg {
    color: ${({ theme }) => theme.purple};
  }

  > span {
    color: ${({ theme }) => theme.purple_dark};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const CartContainer = styled(Link)`
  background: ${({ theme }) => theme.yellow_light};
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    background: ${({ theme }) => theme.yellow_dark};
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    vertical-align: center;
    width: 1.25rem;
    height: 1.25rem;
  }
`
