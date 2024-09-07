import { FieldValues } from 'react-hook-form';

export interface EmployeeFormFields extends FieldValues {
  name: string;
  phoneNumber: string;
  birthday: string;
  role: string;
}
