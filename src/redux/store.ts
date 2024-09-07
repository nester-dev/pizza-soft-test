import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOptions, SORTING_TYPES } from '@/shared/types';
import { ROLES_TYPES } from '@/shared/types/employee.interface.ts';

type StoreInitialState = {
  filterOptions: FilterOptions;
  showModal: boolean;
};

const initialState: StoreInitialState = {
  filterOptions: {
    sorting: SORTING_TYPES.NAME_ASC,
    position: ROLES_TYPES.ALL,
    archived: false,
  },
  showModal: false,
};

const storeSlice = createSlice({
  name: 'mainStore',
  initialState: initialState,
  reducers: {
    setFilterOptions: (state, action: PayloadAction<FilterOptions>) => {
      state.filterOptions = action.payload;
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
});

export default storeSlice.reducer;

export const { setFilterOptions, setShowModal } = storeSlice.actions;
