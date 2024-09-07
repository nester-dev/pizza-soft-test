import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from '@/shared/types/employee.interface.ts';
import { setEmployees, setFilteredEmployees } from '@/redux/store.ts';
import { SORTING_TYPES } from '@/shared/types';
import { sortEmployees } from '@/utils/sort.ts';

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

    getEmployeeById: builder.query<Employee, string>({
      query: () => import.meta.env.VITE_API_URL,
      transformResponse: (response: Employee[], _, arg) => {
        return response?.find((elem) => elem.id === Number(arg));
      },
    }),
  }),
});

export const { useGetEmployeesQuery, useGetEmployeeByIdQuery } = api;
