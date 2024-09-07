import { FieldValues } from 'react-hook-form';
import { ROLES_TYPES } from '@/shared/types/employee.interface.ts';

export interface EmployeeFormFields extends FieldValues {
  name: string;
  phone: string;
  birthday: string;
  role: ROLES_TYPES;
  isArchive: boolean;
}
