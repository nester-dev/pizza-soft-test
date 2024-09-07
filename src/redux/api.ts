import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from '@/shared/types/employee.interface.ts';
import fs from 'vite-plugin-fs/browser';
import { readFile, writeFile } from '@/utils/file-system.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Employees', 'Employee'],
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      providesTags: ['Employees'],
      query: () => import.meta.env.VITE_API_URL,
    }),

    getEmployeeById: builder.query<Employee | undefined, string>({
      providesTags: ['Employee'],
      query: () => import.meta.env.VITE_API_URL,
      transformResponse: (response: Employee[], _, arg) => {
        return response?.find((elem) => elem.id === Number(arg));
      },
    }),

    editEmployee: builder.mutation<void, Employee>({
      query: () => import.meta.env.VITE_API_URL,
      invalidatesTags: ['Employees', 'Employee'],
      transformResponse: async (response: void, _, arg) => {
        try {
          const data = await fs.readFile(import.meta.env.VITE_API_URL);
          const employees: Employee[] = JSON.parse(data);

          const employee = employees.find((elem) => elem.id === Number(arg.id));

          if (employee) {
            Object.assign(employee, arg);

            await writeFile(import.meta.env.VITE_API_URL, employees);
          }
        } catch (e) {
          console.log(e);
        }

        return response;
      },
    }),

    createEmployee: builder.mutation<void, Employee>({
      query: () => import.meta.env.VITE_API_URL,
      invalidatesTags: ['Employees'],
      transformResponse: async (response: void, _, arg) => {
        try {
          const employees = await readFile<Employee[]>(
            import.meta.env.VITE_API_URL
          );
          const newEmployee = {
            ...arg,
            id: employees.length + 1,
          };

          employees.push(newEmployee);

          await writeFile(import.meta.env.VITE_API_URL, employees);
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
  useCreateEmployeeMutation,
} = api;
