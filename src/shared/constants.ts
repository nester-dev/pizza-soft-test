import { SORTING_TYPES } from '@/shared/types';
import { ROLES_TYPES } from '@/shared/types/employee.interface.ts';

export const SORTING_OPTIONS = [
  {
    label: 'NAME ↑',
    value: SORTING_TYPES.NAME_ASC,
  },
  {
    label: 'NAME ↓',
    value: SORTING_TYPES.NAME_DESC,
  },

  {
    label: 'BIRTHDAY ↑',
    value: SORTING_TYPES.BIRTHDAY_ASC,
  },
  {
    label: 'BIRTHDAY ↓',
    value: SORTING_TYPES.BIRTHDAY_DESC,
  },
];

export const POSITION_OPTIONS = [
  {
    label: 'All',
    value: ROLES_TYPES.ALL,
  },

  {
    label: 'Cook',
    value: ROLES_TYPES.COOK,
  },

  {
    label: 'Driver',
    value: ROLES_TYPES.DRIVER,
  },

  {
    label: 'Waiter',
    value: ROLES_TYPES.WAITER,
  },
];

export const BIRTHDAY_FORMAT = 'dd.MM.yyyy';
