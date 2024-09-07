import { Employee, ROLES_TYPES } from '@/shared/types/employee.interface.ts';
import { sortEmployees } from '@/utils/sort.ts';
import { FilterOptions } from '@/shared/types';

export const filterEmployees = (
  employees: Employee[] | undefined,
  filterOptions: FilterOptions
) => {
  if (!employees) {
    return [];
  }

  const { position, sorting, archived } = filterOptions;
  let filteredEmployees = [...employees];

  if (position !== ROLES_TYPES.ALL) {
    filteredEmployees = filteredEmployees.filter(
      (elem) => elem.role === position
    );
  }

  if (archived) {
    filteredEmployees = filteredEmployees.filter((elem) => elem.isArchive);
  }

  filteredEmployees = sortEmployees(sorting, filteredEmployees);

  return filteredEmployees;
};
