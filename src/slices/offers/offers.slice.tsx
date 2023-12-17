import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../model/offer';
import {
  loadOffersThunk,
  loadOfferByIdThunk,
  createOfferThunk,
  deleteOfferThunk,
} from './offers.thunk';

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

    //byId
    builder.addCase(loadOfferByIdThunk.pending, (state: OffersState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadOfferByIdThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer>) => {
        state.currentOfferItem = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadOfferByIdThunk.rejected, (state: OffersState) => {
      state.stateOption = 'error';
      return state;
    });

    // builder.addCase(
    //   createOfferThunk.fulfilled,
    //   (state: OffersState, { payload }: PayloadAction<Offer>) => ({
    //     ...state,
    //     offers: [...state.offers, payload],
    //   })
    // );

    builder.addCase(
      createOfferThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer>) => {
        state.offers.push(payload);
        return state;
      }
    );
    builder.addCase(
      deleteOfferThunk.fulfilled,
      (state: OffersState, { payload }: PayloadAction<Offer['id']>) => {
        state.offers.splice(
          state.offers.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );
  },
});

export default offersSlice.reducer;
export const { setCurrentOffers } = offersSlice.actions;
