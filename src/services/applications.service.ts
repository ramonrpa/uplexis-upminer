import store from '~/store';
import { setApplications } from '~/store/reducers/applications.reducer';
import Logo2 from '~/assets/images/logo_2.png';
import BannerBackground2 from '~/assets/images/banner_2.png';
import Logo1 from '~/assets/images/logo_1.png';
import BannerBackground1 from '~/assets/images/banner_1.png';
import { setBanners } from '~/store/reducers/banners.reducer';

const mockApplicationDescription =
  'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A. e capital aberto e limitadas (LTDA) de grande porte.';
const mockApplications = [
  {
    id: 0,
    category: 1,
    price: 21.99,
    launch: '2021-08-01 00:00:00',
  },
  {
    id: 1,
    category: 2,
    description: mockApplicationDescription,
    price: 35,
    launch: '2021-08-02 00:00:00',
  },
  {
    id: 2,
    category: 3,
    description: mockApplicationDescription,
    price: 45,
    launch: '2021-08-03 00:00:00',
  },
  {
    id: 3,
    category: 4,
    description: mockApplicationDescription,
    price: 22,
    launch: '2021-08-04 00:00:00',
  },
  {
    id: 4,
    category: 5,
    description: mockApplicationDescription,
    price: 10,
    launch: '2021-08-05 00:00:00',
  },
  {
    id: 5,
    category: 6,
    description: mockApplicationDescription,
    price: 78,
    launch: '2021-08-06 00:00:00',
  },
  {
    id: 6,
    category: 7,
    description: mockApplicationDescription,
    price: 64,
    launch: '2021-08-07 00:00:00',
  },
  {
    id: 7,
    category: 8,
    description: mockApplicationDescription,
    price: 29.99,
    launch: '2021-08-08 00:00:00',
  },
  {
    id: 8,
    category: 9,
    description: mockApplicationDescription,
    price: 20,
    launch: '2021-08-09 00:00:00',
  },
  {
    id: 9,
    category: 9,
    description: mockApplicationDescription,
    price: 29.99,
    launch: '2021-08-10 00:00:00',
  },
  {
    id: 10,
    category: 3,
    description: mockApplicationDescription,
    price: 29.99,
    launch: '2021-08-11 00:00:00',
  },
  {
    id: 11,
    category: 4,
    description: mockApplicationDescription,
    price: 32.99,
    launch: '2021-08-12 00:00:00',
  },
];

const mockBanners = [
  {
    background: BannerBackground2,
    logo: Logo2,
    nameColor: '#070707',
    descriptionColor: '#a9a9a9',
    name: 'Histórico Empresarial',
    description:
      'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação',
    price: 50.0,
  },
  {
    background: BannerBackground1,
    logo: Logo1,
    nameColor: '#f6f9fa',
    descriptionColor: '#bbbcbd',
    name: 'Histórico Empresarial',
    description:
      'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação',
    price: 40.0,
  },
];

export const getApplications = (category?: number, orderBy?: number) => {
  const { categories } = store.getState();
  let applications = mockApplications.map((item) => {
    const category = categories.find(
      (category) => category.id == item.category,
    );
    return {
      ...item,
      name: category?.name || 'Profissional',
      icon: category?.icon || 'fas fa-briefcase',
    };
  });

  if (category !== 0)
    applications = applications.filter((app) => app.category === category);

  if (orderBy === 0 || orderBy === 1) {
    applications = applications.sort((a, b) => {
      if (a.price > b.price) return orderBy === 0 ? 1 : -1;

      if (a.price < b.price) return orderBy === 0 ? -1 : 1;

      return 0;
    });
  }

  if (orderBy === 2 || orderBy === 3) {
    applications = applications.sort((a, b) => {
      const aDate = new Date(a.launch);
      const bDate = new Date(b.launch);
      if (aDate > bDate) return orderBy === 2 ? -1 : 1;

      if (aDate < bDate) return orderBy === 3 ? 1 : -1;

      return 0;
    });
  }
  store.dispatch(setApplications(applications));
};

export const getBanners = () => {
  store.dispatch(setBanners(mockBanners));
};
