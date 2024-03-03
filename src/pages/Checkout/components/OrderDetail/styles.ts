import styled from 'styled-components'

export const OrderDetailContainer = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.base_text};
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: 0.875rem;
  }
`

export const TotalPriceOrder = styled.div`
  > span {
    color: ${({ theme }) => theme.base_subtitle};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`
