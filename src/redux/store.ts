import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOptions, SORTING_TYPES } from '@/shared/types';
import { Employee, ROLES_TYPES } from '@/shared/types/employee.interface.ts';
import { filterEmployees } from '@/utils/filter-employees.ts';

type StoreInitialState = {
  employees: Employee[];
  filteredEmployees: Employee[];
  filterOptions: FilterOptions;
};

const initialState: StoreInitialState = {
  employees: [],
  filteredEmployees: [],
  filterOptions: {
    sorting: SORTING_TYPES.NAME_ASC,
    position: ROLES_TYPES.ALL,
    archived: false,
  },
};

const storeSlice = createSlice({
  name: 'mainStore',
  initialState: initialState,
  reducers: {
    setFilterOptions: (state, action: PayloadAction<FilterOptions>) => {
      const filteredEmployees = filterEmployees(
        state.employees,
        action.payload
      );
      state.filterOptions = action.payload;
      state.filteredEmployees = filteredEmployees;
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

export const { setFilterOptions, setEmployees, setFilteredEmployees } =
  storeSlice.actions;
