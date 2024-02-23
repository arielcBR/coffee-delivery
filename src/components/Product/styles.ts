import styled from 'styled-components'

export const ProductContainer = styled.div`
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.base_card};
  padding: 1.25rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 16rem;
`

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: -1.75rem;
    position: relative;
    top: -2.5rem;

    height: 120px;
    width: 120px;
  }

  > div {
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;

    > span {
      background: ${({ theme }) => theme.yellow_light};
      border-radius: 100px;
      color: ${({ theme }) => theme.yellow_dark};
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 130%;
      padding: 0.25rem 0.5rem;
    }
  }

  > h3 {
    color: ${({ theme }) => theme.base_subtitle};
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  > p {
    color: ${({ theme }) => theme.base_label};
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: 1.75rem;
    text-align: center;
  }
`

export const ProductFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`
export const WrapperProductPrice = styled.div`
  line-height: 130%;

  display: flex;
  flex-direction: row;
  gap: 0.275rem;
`

export const ProductCurrency = styled.span`
  color: ${({ theme }) => theme.base_text};
  text-align: right;
  font-size: 0.875rem;
`

export const ProductPrice = styled.div`
  color: ${({ theme }) => theme.base_text};
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 800;
`

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${({ theme }) => theme.base_button};
  padding: 0.5rem;

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

export const WrapperCartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.purple};
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;

  > svg {
    fill: ${({ theme }) => theme.white};
  }
`
