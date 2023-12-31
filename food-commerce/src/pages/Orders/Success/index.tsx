import { useParams } from 'react-router-dom'
import { Button } from '../../../components/EmptyCart/styles'

import { Head } from '../../../components/Head'

import { Container, Inner, SubTitle, Title } from './styled'

export default function OrderSuccessPage() {
  const { orderId } = useParams()

  return (
    <Container>
      <Head title='Compra Realizada com Sucesso!' />

      <Inner>
        <Title>Compra Realizada com Sucesso</Title>

        <p>
          Número de Pedido <code>#{orderId}</code>
        </p>

        <SubTitle>Dados de Contato da Loja</SubTitle>

        <ul>
          <li>Endereço: Av José da Silva, 45</li>
          <li>Tel: 51 98512-4574</li>
        </ul>

        <br />

      </Inner>
      <Button to='/' className='button'>página inicial</Button>
    </Container>
  )
}
