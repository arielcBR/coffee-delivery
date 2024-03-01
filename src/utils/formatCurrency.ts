export const formatCurrency = (price: number) => {
  let formattedString = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (formattedString = formattedString.replace('R$', ''))
}
