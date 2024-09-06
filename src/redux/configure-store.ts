import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '@/redux/api.ts';

export const store = configureStore({
  reducer: {
    mainStore: storeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
