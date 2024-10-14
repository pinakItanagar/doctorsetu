import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
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
        title: 'Access Control',
        link: '/pages/tables/access-control',
      },
      {
        title: 'Language',
        link: '/pages/tables/language-speak',
      },
      // {
      //   title: 'Payment Settings',
      //   link: '/pages/tables/payment-settings',
      // },
      {
        title: 'Symptoms',
        link: '/pages/tables/contact-list',
      },
      {
        title: 'Specialization',
        link: '/pages/tables/specilization',
      },
      {
        title: 'Users',
        link: '/pages/tables/users',
      },
      {
        title: 'Verification',
        link: '/pages/tables/verifi-check-list',
      },
    ],
  },
  {
    title: 'Hospital',
    icon: 'home',
    link: '/pages/charts/d3',
  },
  {
    title: 'Doctor',
    icon: 'person-add-outline',
    link: '/pages/layout/stepper',
  },
 
  // {
  //   title: 'Doctors',
  //   icon: 'person-add-outline',
  //   link: '/pages/layout/doctors/:id',
  // },
  {
    title: 'Patient',
    icon: 'people',
    link: '/pages/charts/echarts',
  },
  // {
  //   title: 'Patient-Profile',
  //   icon: 'people',
  //   link: '/pages/charts/patient-profile',
  // },
  {
    title: 'Consultation',
    icon: 'external-link',
    link: '/pages/charts/consultation',
  },
  // {
  //   title: 'consultation-update',
  //   icon: 'external-link',
  //   link: '/pages/charts/consultation-update',
  // },
  {
    title: 'Transaction History',
    icon: 'credit-card-outline',
    link: '/pages/payment/payment-option',
  },
  // {
  //   title: 'Reports',
  //   icon: 'text-outline',
  //   link: '/pages/charts/report',
  // },
   {
    title: 'Logout',
    icon: 'log-in',
    link: '../auth/login',
  },
];
