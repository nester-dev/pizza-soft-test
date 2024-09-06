import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from '@/shared/types/employee.interface.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => '',
    }),
  }),
});

export const { useGetEmployeesQuery } = api;
