import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Banner {
  background: string;
  logo: string;
  nameColor: string;
  descriptionColor: string;
  name: string;
  description: string;
  price: number;
}

const initialState: Banner[] = [];

export const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    setBanners: (state, action: PayloadAction<Banner[]>) => {
      return action.payload;
    },
  },
});

export const { setBanners } = bannersSlice.actions;

export default bannersSlice.reducer;
