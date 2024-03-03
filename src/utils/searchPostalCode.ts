export async function searchPostalCode(cep: string) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()

    if (!data.erro) {
      return {
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
        error: false,
      }
    }
    return {
      street: '',
      neighborhood: '',
      city: '',
      state: '',
      error: true,
    }
  } catch (error) {
    console.error('Ocorreu um erro ao buscar o CEP:', error)
    throw error
  }
}
