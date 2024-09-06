import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee } from '@/shared/types/employee.interface.ts';
import { setEmployees, setFilteredEmployees } from '@/redux/store.ts';
import { SORTING_TYPES } from '@/shared/types';
import { sortEmployees } from '@/utils/sort.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => '',
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
  }),
});

export const { useGetEmployeesQuery } = api;
