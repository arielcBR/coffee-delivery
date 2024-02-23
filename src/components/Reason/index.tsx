import React from 'react'
import { Icon } from '@phosphor-icons/react'
import { ReasonContainer, ReasonText, IconWrapper } from './styles'

interface ReasonProps {
  icon: React.ReactNode
  text: string
  backgroundcolor: 'darkYellow' | 'yellow' | 'lightGray' | 'DarkPurple'
}

export function Reason({
  icon,
  text,
  backgroundcolor = 'darkYellow',
}: ReasonProps) {
  return (
    <ReasonContainer>
      <IconWrapper backgroundcolor={backgroundcolor}>
        {React.cloneElement(icon as React.ReactElement<Icon>)}
      </IconWrapper>
      <ReasonText>{text}</ReasonText>
    </ReasonContainer>
  )
}
