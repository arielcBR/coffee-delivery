import React from 'react'
import { Icon } from '@phosphor-icons/react'
import { PaymentMethodContainer } from './styles'

interface PaymentMethodProps {
  method: string
  icon: React.ReactNode
  active?: boolean
}

export function PaymentMethod({
  method,
  icon,
  active = false,
}: PaymentMethodProps) {
  return (
    <PaymentMethodContainer className={active ? 'active' : ''}>
      {React.cloneElement(icon as React.ReactElement<Icon>)}
      {method}
    </PaymentMethodContainer>
  )
}
