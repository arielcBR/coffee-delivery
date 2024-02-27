import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'messageContainer picture';

  margin: 4rem 0;
`
export const Header = styled.header`
  grid-area: header;
  margin-bottom: 2.5rem;

  > h2 {
    color: ${({ theme }) => theme.yellow_dark};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 0.25rem;
  }

  > p {
    color: ${({ theme }) => theme.base_subtitle};
    font-family: Roboto, sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    margin-bottom: 0.25rem;
  }
`

export const Main = styled.main`
  grid-area: messageContainer;

  border-radius: 6px 36px;
  border: 1px solid ${({ theme }) => theme.yellow};
  overflow: none;
  padding: 2.5rem;
  width: 27.875rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      background: ${({ theme }) => theme.purple};
      border-radius: 50%;
      box-sizing: content-box;
      fill: ${({ theme }) => theme.white};
      padding: 0.4rem;
      height: 1rem;
      width: 1rem;
    }
  }
`

export const Picture = styled.img`
  grid-area: picture;

  height: 13.73rem;
  width: 23rem;
`
