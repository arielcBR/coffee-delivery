import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { HomeContainer, ReasonsContainer, Title, CoffeeList } from './styles'

import hero from '../../assets/images/hero.png'
import { Reason } from '../../components/Reason'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../data/coffee'

export function Home() {
  return (
    <HomeContainer>
      <section>
        <div>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <ReasonsContainer>
            <Reason
              icon={<ShoppingCart size={22} />}
              text="Compra simples e segura"
              backgroundcolor="darkYellow"
            />

            <Reason
              icon={<Package size={22} />}
              text="Embalagem mantém o café intacto"
              backgroundcolor="lightGray"
            />

            <Reason
              icon={<Timer size={22} />}
              text="Entrega rápida e rastreada"
              backgroundcolor="yellow"
            />

            <Reason
              icon={<Coffee size={22} />}
              text="O café chega fresquinho até você"
              backgroundcolor="DarkPurple"
            />
          </ReasonsContainer>
        </div>

        <img
          src={hero}
          alt="Copo plástico flutuando cercado de grãos de café e aparatos para preparo do café"
        />
      </section>

      <h2>Nossos cafés</h2>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </HomeContainer>
  )
}
