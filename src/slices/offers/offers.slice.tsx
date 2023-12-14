import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../model/offer';
import { loadOffersThunk } from './offers.thunk';

export type OffersState = {
  offers: Offer[];
  stateOption: 'idle' | 'loading' | 'error';
  currentOfferItem: Offer | null;
};

const initialState: OffersState = {
  offers: [],
  stateOption: 'idle',
  currentOfferItem: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCurrentOffers: (
      state: OffersState,
      { payload }: PayloadAction<Offer | null>
    ) => {
      state.currentOfferItem = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadOffersThunk.pending, (state: OffersState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadOffersThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer[]>) => {
        state.offers = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadOffersThunk.rejected, (state: OffersState) => {
      state.stateOption = 'error';
      return state;
    });
  },
});

export default offersSlice.reducer;
export const { setCurrentOffers } = offersSlice.actions;
