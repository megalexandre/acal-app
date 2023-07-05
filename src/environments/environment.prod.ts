export const baseUrl = 'https://acal.online:8080/';

export const environment = {
  production: true,

  api: baseUrl,

  auth:{
    login: `auth/login`,
    logout: `auth/logout`,
  },

  book: `${baseUrl + 'book'}`,
  hydrometer: `${baseUrl + 'hydrometer'}`,
  quality: `${baseUrl + 'quality'}`,
  customer: `${baseUrl + 'customer'}`,
  user: `${baseUrl + 'user'}`,
  address: `${baseUrl + 'address'}`,
  group: `${baseUrl + 'group'}`,
  link: `${baseUrl + 'link'}`,
  invoice: `${baseUrl + 'invoice'}`,
  place: `${baseUrl + 'place'}`,
  report: `${baseUrl + 'report'}`,


  management: {
    router: '/management',
  },

  dashboard: {
    routers: {
      planAccount:
      {
        synthetic: '/synthetic',
        analytical : '/analytical',
      },
    },
  },
};
