import React from 'react'
import { Icon } from '@phosphor-icons/react'
import { PaymentMethodContainer } from './styles'

interface PaymentMethodProps {
  method: string
  icon: React.ReactNode
  active?: boolean
  onClick: () => void
}

export function PaymentMethod({
  method,
  icon,
  active = false,
  onClick,
}: PaymentMethodProps) {
  return (
    <PaymentMethodContainer
      onClick={onClick}
      className={active ? 'active' : ''}
    >
      {React.cloneElement(icon as React.ReactElement<Icon>)}
      {method}
    </PaymentMethodContainer>
  )
}
