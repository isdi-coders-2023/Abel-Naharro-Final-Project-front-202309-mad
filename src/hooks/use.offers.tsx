import { useCallback, useMemo } from 'react';
import { OffersRepo } from '../services/api.repo.offers.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import {
  loadOffersThunk,
  loadOfferByIdThunk,
  createOfferThunk,
  deleteOfferThunk,
} from '../slices/offers/offers.thunk.ts';
import { Offer } from '../model/offer.ts';

export function useOffers() {
  const { currentOfferItem, offers } = useSelector(
    (state: RootState) => state.offersState
  );
  const { token } = useSelector((state: RootState) => state.usersState);
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new OffersRepo(token!), [token]);

  const loadOffers = useCallback(async () => {
    dispatch(loadOffersThunk(repo));
  }, [repo, dispatch]);

  const loadOffer = useCallback(async () => {
    dispatch(loadOfferByIdThunk({ repo, id: currentOfferItem?.id as string }));
  }, [repo, currentOfferItem?.id, dispatch]);

  // const loadExternalOffer = async (id: string) => {
  //   return await repo.getOfferById(id);
  // };

  const deleteOffer = async (id: Offer['id']) => {
    dispatch(
      deleteOfferThunk({
        id,
        repo,
      })
    );
  };

  const createOffer = async (newOffer: FormData) => {
    dispatch(
      createOfferThunk({
        repo,
        newOffer,
      })
    );
  };

  return {
    loadOffers,
    loadOffer,
    offers,
    currentOfferItem,
    createOffer,
    deleteOffer,
    // loadExternalOffer,
  };
}
