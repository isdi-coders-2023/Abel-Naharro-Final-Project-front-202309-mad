import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersRepo } from '../../services/api.repo.offers.ts';
import { Offer } from '../../model/offer.ts';

export const loadOffersThunk = createAsyncThunk<Offer[], OffersRepo>(
  'load',
  async (repo) => {
    const offers = await repo.getOffers();
    return offers;
  }
);
