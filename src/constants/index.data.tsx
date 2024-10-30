import type { TnavigationType } from '@ttypes';

export const navigation: TnavigationType[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: 'bi bi-ui-checks-grid',
    role: ['admin', 'employee'],
  },
  {
    path: '/orders',
    title: 'New orders',
    icon: 'bi bi-pause-circle-fill',
    role: ['admin'],
  },
  {
    path: '/order-completed',
    title: 'Completed Orders',
    icon: 'bi bi-gear-fill',
    role: ['admin', 'employee'],
  },
  {
    path: '/order-canceld',
    title: 'Cancelled Orders',
    icon: 'bi bi-x-circle-fill',
    role: ['admin', 'employee'],
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: 'bi bi-people-fill',
    role: ['admin', 'employee'],
  },
];

export const cardStats = [
  {
    title: 'New Orders',
    value: 324,
    icon: 'bi bi-clock',
    color: '#EBFFAF',
  },
  {
    title: 'Completed Orders',
    value: 765,
    icon: 'bi bi-check2-circle',
    color: '#B4E8C0',
  },
  {
    title: 'Cancelled Orders',
    value: 123,
    icon: 'bi bi-x-circle',
    color: '#EE9494',
  },
  {
    title: 'Leads',
    value: 15000,
    icon: 'bi bi-fire',
    color: '#C3B9EA',
  },
  {
    title: 'Employees',
    value: 250,
    icon: 'bi bi-people',
    color: '#7BD3EA',
  },
];

export const barchart = [
  {
    quarter: 'January',
    year: 2024,
    month: 1,
    totalPrice: 1300,
    wearables: 12,
    services: 20,
  },
  {
    quarter: 'February',
    year: 2024,
    month: 2,
    totalPrice: 1200,
    wearables: 15,
    services: 25,
  },
  {
    quarter: 'March',
    year: 2024,
    month: 3,
    totalPrice: 1100,
    wearables: 18,
    services: 30,
  },
  {
    quarter: 'April',
    year: 2024,
    month: 4,
    totalPrice: 1700,
    wearables: 20,
    services: 35,
  },
  {
    quarter: 'May',
    year: 2024,
    month: 5,
    totalPrice: 1800,
    wearables: 22,
    services: 40,
  },
  {
    quarter: 'June',
    year: 2024,
    month: 6,
    totalPrice: 1500,
    wearables: 25,
    services: 45,
  },
  {
    quarter: 'July',
    year: 2024,
    month: 7,
    totalPrice: 1700,
    wearables: 28,
    services: 50,
  },
  {
    quarter: 'August',
    year: 2024,
    month: 8,
    totalPrice: 2100,
    wearables: 30,
    services: 55,
  },
  {
    quarter: 'September',
    year: 2024,
    month: 9,
    totalPrice: 2000,
    wearables: 32,
    services: 60,
  },
  {
    quarter: 'October',
    year: 2024,
    month: 10,
    totalPrice: 2300,
    wearables: 35,
    services: 65,
  },
  {
    quarter: 'November',
    year: 2024,
    month: 11,
    totalPrice: 0,
    wearables: 38,
    services: 70,
  },
  {
    quarter: 'December',
    year: 2024,
    month: 12,
    totalPrice: 0,
    wearables: 40,
    services: 75,
  },
];