import { SORTING_TYPES } from '@/shared/types';

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

export const BIRTHDAY_FORMAT = 'dd.MM.yyyy';
