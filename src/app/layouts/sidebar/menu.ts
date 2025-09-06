import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Menu',
    isTitle: true,
  },
  {
    id: 1000,
    label: 'Água',
    icon: 'las la-tachometer-alt',
    isCollapsed: true,
    subItems: [
      {
        id: 1001,
        label: 'Qualidade da Água',
        link: '/water-quality',
        parentId: 1000,
      },
    ]  
  },

  {
    id: 2000,
    label: 'Cadastros',
    icon: 'las la-tachometer-alt',
    isCollapsed: true,
    subItems: [
      {
        id: 2001,
        label: 'Ligações',
        link: '/links',
        parentId: 1000,
      },
       {
        id: 2002,
        label: 'MENUITEMS.DASHBOARD.LIST.ADDRESS',
        link: '/address',
        parentId: 2000,
      },
      {
        id: 2003,
        label: 'MENUITEMS.DASHBOARD.LIST.PLACES',
        link: '/places',
        parentId: 2000,
      },
      {
        id: 2004,
        label: 'Categorias',
        link: '/categories',
        parentId: 2000,
      },
      {
        id: 2005,
        label: 'Usuários',
        link: '/customers',
        parentId: 2000,
      },

    ]  
  },

  {
    id: 3000,
    label: 'Financeiro',
    icon: 'las la-tachometer-alt',
    isCollapsed: true,
    subItems: [
      {
        id: 3001,
        label: 'Faturas',
        link: '/invoices',
        parentId: 3000,
      },
      {
        id: 3002,
        label: 'Caixa',
        link: '/financial-record',
        parentId: 3000,
      },
    ]  
  }

];
