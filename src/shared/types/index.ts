export enum SORTING_TYPES {
  NAME_ASC = 'name-asc',
  NAME_DESC = 'name-desc',
  BIRTHDAY_ASC = 'birthday-asc',
  BIRTHDAY_DESC = 'birthday-desc',
}

export type SelectOption<T> = {
  label: string;
  value: T;
};
