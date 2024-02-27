import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { SuccessContainer, Header, Main, Picture } from './styles'

import illustration from '../../assets/images/Illustration.png'

export function Success() {
  return (
    <SuccessContainer>
      <Header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>

      <Main>
        <div>
          <MapPin />
          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli</strong>, 102
            </p>
            <p> Farrapos Porto Alegre, RS</p>
          </div>
        </div>

        <div>
          <Timer />
          <div>
            <p>Previsão de entrega em</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </div>
        </div>

        <div>
          <CurrencyDollar />
          <div>
            <p>Pagamento na entrega</p>
            <p>
              <strong>Cartão de crédito</strong>
            </p>
          </div>
        </div>
      </Main>

      <Picture src={illustration} alt="homem dirigindo uma motocicleta" />
    </SuccessContainer>
  )
}
