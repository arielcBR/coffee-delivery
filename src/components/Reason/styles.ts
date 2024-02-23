import styled from 'styled-components'

interface IconWrapperProps {
  backgroundcolor: 'darkYellow' | 'yellow' | 'lightGray' | 'DarkPurple'
}

const backgroundColorSVG = {
  darkYellow: 'yellow_dark',
  yellow: 'yellow',
  lightGray: 'base_text',
  DarkPurple: 'purple_dark',
}

export const ReasonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 1.25rem;
`
export const IconWrapper = styled.div<IconWrapperProps>`
  background: ${({ theme, backgroundcolor }) =>
    theme[backgroundColorSVG[backgroundcolor]]};
  color: ${({ theme }) => theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  padding: 0.5rem;
  height: 2rem;
  width: 2rem;
`

export const ReasonText = styled.span`
  color: ${({ theme }) => theme.base_text};
  font-size: 0.875rem;
  line-height: 130%;
`
