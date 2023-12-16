import { createAsyncThunk } from '@reduxjs/toolkit';
import { OffersRepo } from '../../services/api.repo.offers.ts';
import { Offer } from '../../model/offer.ts';

export type Params = {
  repo: OffersRepo;
  newOffer: FormData;
};

export const loadOffersThunk = createAsyncThunk<Offer[], OffersRepo>(
  'load',
  async (repo) => {
    const offers = await repo.getOffers();
    return offers;
  }
);

export const loadOfferByIdThunk = createAsyncThunk<
  Offer,
  { repo: OffersRepo; id: Offer['id'] }
>('loadItem', async ({ id, repo }) => {
  const offer = await repo.getOfferById(id);
  return offer;
});

export const createOfferThunk = createAsyncThunk<Offer, Params>(
  'create',
  async ({ repo, newOffer }) => {
    const finalClothingItem = await repo.createOffer(newOffer);
    return finalClothingItem;
  }
);
