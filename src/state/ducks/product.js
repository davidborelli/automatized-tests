import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setAvaliacaoQuantidade: ['quantidade']
})

const INITIAL_STATE = {
  codigo: 12762,
  brinde: {},
  oferta: {},
  oferta_inicio: 0,
  nova_descricao: '',
  nome: 'Cabo Sata 180°/180° s/ Logo PC-CBST04',
  menus: [
    {
      codigo: 3,
      nome: 'Periféricos',
      amigavel: '/perifericos',
      nome_url: '/Periféricos'
    },
    {
      codigo: 5,
      nome: 'Câmeras Digitais',
      amigavel: '/perifericos/cameras-digitais',
      nome_url: '/Periféricos/Câmeras Digitais'
    },
    {
      codigo: 7,
      nome: 'Coolers',
      amigavel: '/perifericos/cameras-digitais/coolers',
      nome_url: '/Periféricos/Câmeras Digitais/Coolers'
    },
    {
      codigo: 8,
      nome: 'Disco Rígido (HD)',
      amigavel: '/perifericos/cameras-digitais/coolers/disco-rigido-hd',
      nome_url: '/Periféricos/Câmeras Digitais/Coolers/Disco Rígido (HD)'
    },
    {
      codigo: 9,
      nome: 'Drives',
      amigavel: '/perifericos/cameras-digitais/coolers/disco-rigido-hd/drives',
      nome_url: '/Periféricos/Câmeras Digitais/Coolers/Disco Rígido (HD)/Drives'
    }
  ],
  menu: 'Periféricos/Câmeras Digitais/Coolers/Disco Rígido (HD)/Drives',
  fotos: [
    'https://images2.kabum.com.br/produtos/fotos/12762/12762_index_g.jpg'
  ],
  descricao: 'Cabo Sata 180°/180° s/ Logo PC-CBST04',
  disponibilidade: true,
  fabricante: {
    codigo: 228,
    nome: 'Plus cable',
    img: 'https://images8.kabum.com.br/produtos/fabricantes/logo-plus-cable.jpg'
  },
  tag_title: '',
  tag_description: '',
  avaliacao_numero: 425,
  avaliacao_nota: 3,
  desconto: 15,
  dimensao_peso: 49,
  peso: '49 gramas (bruto com embalagem)',
  garantia: '24 meses de garantia',
  codigo_anatel: '',
  produto_especie: 0,
  link_descricao: '/produto/12762/cabo-sata-180-180-s-logo-pc-cbst04',
  origem: 0,
  is_openbox: false,
  origem_nome: '',
  preco: 3,
  preco_desconto: 2.55,
  preco_antigo: 0,
  economize_prime: 0,
  valores_informativos: {
    preco_antigo: 0,
    preco: 3,
    preco_desconto: 2.55,
    preco_prime: 4.59,
    preco_desconto_prime: 3.9,
    desconto: 15
  },
  produto_prime: false,
  flag_blackfriday: 0,
  sucesso: true
}

const setAvaliacaoQuantidade = (state = INITIAL_STATE, { quantidade }) => ({
  ...state,
  avaliacao_numero: quantidade
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_AVALIACAO_QUANTIDADE]: setAvaliacaoQuantidade
})

const productState = 'productState'

const productSelector = state => state[productState]
export { productSelector, productState }
