import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Application {
  id: number;
  icon: string;
  name: string;
  description?: string;
  price: number;
}

const initialState: Application[] = [];

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setApplications: (state, action: PayloadAction<Application[]>) => {
      return action.payload;
    },
  },
});

export const { setApplications } = applicationsSlice.actions;

export default applicationsSlice.reducer;
