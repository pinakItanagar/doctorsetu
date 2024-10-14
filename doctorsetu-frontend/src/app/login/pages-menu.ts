import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Masters',
    icon: 'keypad-outline',
    link: '/pages/tables',
    children: [
      {
        title: 'Symptoms',
        link: '/pages/tables/contact-list',
      },
      {
        title: 'Specilization',
        link: '/pages/tables/specilization',
      },
      {
        title: 'language',
        link: '/pages/tables/language-speak',
      },
    ],
  },
  {
    title: 'Hospital',
    icon: 'pie-chart-outline',
    link: '/pages/charts/d3',
  },
  {
    title: 'Doctor',
    icon: 'browser-outline',
    link: '/pages/layout/stepper',
  },
  {
    title: 'Patient',
    icon: 'grid-outline',
    link: '/pages/charts/echarts',
  },

  {
    title: 'Consultation',
    icon: 'layout-outline',
    link: '/pages/layout/tabs',
  },
  {
    title: 'Reports',
    icon: 'text-outline',
    link: '/pages/editors/ckeditor',
  },
   {
    title: 'Login',
    icon: 'lock-outline',
    link: '/auth/login',
  },
];
