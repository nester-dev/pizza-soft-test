export enum Roles {
  DRIVER = 'driver',
  COOK = 'cook',
  WAITER = 'waiter',
}

export type Employee = {
  id: number;
  name: string;
  isArchive: boolean;
  role: Roles;
  phone: string;
  birthday: string;
};
