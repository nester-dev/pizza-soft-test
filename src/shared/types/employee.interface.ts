export enum ROLES_TYPES {
  ALL = 'all',
  DRIVER = 'driver',
  COOK = 'cook',
  WAITER = 'waiter',
}

export type Employee = {
  id: number;
  name: string;
  isArchive: boolean;
  role: ROLES_TYPES;
  phone: string;
  birthday: string;
};
