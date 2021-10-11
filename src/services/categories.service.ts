import store from '~/store';
import { setCategories } from '~/store/reducers/categories.reducer';

const mockCategories = [
  {
    id: 0,
    name: 'Todos',
    icon: 'fas fa-globe',
  },
  {
    id: 1,
    name: 'Profissional',
    icon: 'fas fa-briefcase',
  },
  {
    id: 2,
    name: 'Reguladores',
    icon: 'fas fa-landmark',
  },
  {
    id: 3,
    name: 'Sócio Ambiental',
    icon: 'fas fa-tree',
  },
  {
    id: 4,
    name: 'Jurídico',
    icon: 'fas fa-gavel',
  },
  {
    id: 5,
    name: 'Lista Restritivas',
    icon: 'fas fa-ban',
  },
  {
    id: 6,
    name: 'Mídia / Internet',
    icon: 'fas fa-globe-americas',
  },
  {
    id: 7,
    name: 'Bens e Imóveis',
    icon: 'fas fa-gem',
  },
  {
    id: 8,
    name: 'Cadastro',
    icon: 'fas fa-male',
  },
  {
    id: 9,
    name: 'Financeiro',
    icon: 'fas fa-piggy-bank',
  },
];

export const getCategories = () => {
  store.dispatch(setCategories(mockCategories));
};
