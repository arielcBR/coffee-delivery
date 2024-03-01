import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 5.875rem;
  margin-bottom: 13rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    > div {
      flex: 1;

      > div {
        p {
          color: ${({ theme }) => theme.base_subtitle};
          font-size: 1%.25rem;
          line-height: 130%;
          margin-top: 1.2rem;
          margin-bottom: 2rem;
        }
      }
    }

    > img {
      height: 360px;
      width: 29.75rem;
    }
  }

  > h2 {
    margin: 7.5rem 0 3.375rem 0;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.base_title};
  font-family: 'Baloo 2', sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 130%;
`

export const ReasonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
`
export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  z-index: 0;

  > div {
    margin-bottom: 2.5rem;
  }
`
