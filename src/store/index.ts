import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categories.reducer';
import applicationsReducer from './reducers/applications.reducer';
import bannersReducer from './reducers/banners.reducer';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    applications: applicationsReducer,
    banners: bannersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
