import { Employee } from '@/shared/types/employee.interface.ts';
import { SORTING_TYPES } from '@/shared/types';
import { compareAsc, compareDesc, parse } from 'date-fns';
import { BIRTHDAY_FORMAT } from '@/shared/constants.ts';

export const sortEmployees = (
  sorting: SORTING_TYPES,
  employees?: Employee[]
) => {
  if (!employees) {
    return [];
  }

  const sortedEmployees = [...employees];
  return sortedEmployees.sort((a, b) => {
    switch (sorting) {
      case SORTING_TYPES.NAME_ASC:
        return a.name.localeCompare(b.name);
      case SORTING_TYPES.NAME_DESC:
        return b.name.localeCompare(a.name);
      case SORTING_TYPES.BIRTHDAY_ASC:
        return compareAsc(
          new Date(parse(a.birthday, BIRTHDAY_FORMAT, new Date())),
          new Date(parse(b.birthday, BIRTHDAY_FORMAT, new Date()))
        );
      case SORTING_TYPES.BIRTHDAY_DESC:
        return compareDesc(
          new Date(parse(a.birthday, BIRTHDAY_FORMAT, new Date())),
          new Date(parse(b.birthday, BIRTHDAY_FORMAT, new Date()))
        );
    }
  });
};
