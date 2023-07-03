export const baseUrl = 'http://localhost:8080/';

export const environment = {
  production: false,

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
