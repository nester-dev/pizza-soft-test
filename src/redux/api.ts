import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from '@/shared/types/employee.interface.ts';
import { setEmployees, setFilteredEmployees } from '@/redux/store.ts';
import { SORTING_TYPES } from '@/shared/types';
import { sortEmployees } from '@/utils/sort.ts';
import fs from 'vite-plugin-fs/browser';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => import.meta.env.VITE_API_URL,
      onCacheEntryAdded: async (_, { cacheDataLoaded, dispatch }) => {
        try {
          const { data } = await cacheDataLoaded;
          const sortedEmployees = sortEmployees(SORTING_TYPES.NAME_ASC, data);
          dispatch(setEmployees(data));
          dispatch(setFilteredEmployees(sortedEmployees));
        } catch (e) {
          console.log(e);
        }
      },
    }),

    getEmployeeById: builder.query<Employee | undefined, string>({
      query: () => import.meta.env.VITE_API_URL,
      transformResponse: (response: Employee[], _, arg) => {
        return response?.find((elem) => elem.id === Number(arg));
      },
    }),

    editEmployee: builder.mutation<void, Employee>({
      query: () => import.meta.env.VITE_API_URL,
      transformResponse: async (response: void, _, arg) => {
        try {
          const data = await fs.readFile(import.meta.env.VITE_API_URL);
          const employees: Employee[] = JSON.parse(data);

          const employee = employees.find((elem) => elem.id === Number(arg.id));

          if (employee) {
            Object.assign(employee, arg);

            await fs.writeFile(
              import.meta.env.VITE_API_URL,
              JSON.stringify(employees)
            );
          }
        } catch (e) {
          console.log(e);
        }

        return response;
      },
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useEditEmployeeMutation,
} = api;
