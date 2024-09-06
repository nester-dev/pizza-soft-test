import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SORTING_TYPES } from '@/shared/types';
import { Employee } from '@/shared/types/employee.interface.ts';
import { sortEmployees } from '@/utils/sort.ts';

type StoreInitialState = {
  employees: Employee[];
  filteredEmployees: Employee[];
  sorting: SORTING_TYPES;
};

const initialState: StoreInitialState = {
  employees: [],
  filteredEmployees: [],
  sorting: SORTING_TYPES.NAME_ASC,
};

const storeSlice = createSlice({
  name: 'mainStore',
  initialState: initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<SORTING_TYPES>) => {
      if (state.sorting === action.payload) {
        return;
      }

      state.sorting = action.payload;
      state.filteredEmployees = sortEmployees(action.payload, state.employees);
    },
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    setFilteredEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.filteredEmployees = action.payload;
    },
  },
});

export default storeSlice.reducer;

export const { setSorting, setEmployees, setFilteredEmployees } =
  storeSlice.actions;
