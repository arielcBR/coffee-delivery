import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  HomeContainer,
  ReasonsContainer,
  Title,
  ProductsContainer,
} from './styles'

import hero from '../../assets/images/hero.png'
import { Reason } from '../../components/Reason'
import { Product } from '../../components/Product'

import traditionalExpressCoffee from '../../assets/images/expresso.png'
import americanExpressCoffee from '../../assets/images/american_expresso.png'
import creamyExpressCoffee from '../../assets/images/creamy_expresso.png'
import coldExpressCoffee from '../../assets/images/cold_expresso.png'
import latteCoffee from '../../assets/images/latte.png'

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
      <ProductsContainer>
        <Product
          picture={traditionalExpressCoffee}
          title="Expresso tradicional"
          tags={['tradicional']}
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.9}
        />

        <Product
          picture={americanExpressCoffee}
          title="Expresso tradicional"
          tags={['tradicional']}
          description="Expresso diluído, menos intenso que o tradicional"
          price={9.9}
        />

        <Product
          picture={creamyExpressCoffee}
          title="Expresso Cremoso"
          tags={['tradicional']}
          description="Café expresso tradicional com espuma cremosa"
          price={9.98}
        />

        <Product
          picture={coldExpressCoffee}
          title="Expresso gelado"
          tags={['tradicional', 'gelado']}
          description="Bebida preparada com café expresso e cubos de gelo"
          price={9.9}
        />

        <Product
          picture={latteCoffee}
          title="Expresso tradicional"
          tags={['tradicional', 'com leite']}
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          price={9.89}
        />
      </ProductsContainer>
    </HomeContainer>
  )
}
