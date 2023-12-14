import { useCallback, useMemo } from 'react';
import { OffersRepo } from '../services/api.repo.offers.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import { loadOffersThunk } from '../slices/offers/offers.thunk.ts';

export function useOffers() {
  const { currentOfferItem, offers } = useSelector(
    (state: RootState) => state.offersState
  );
  const { token } = useSelector((state: RootState) => state.usersState);
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new OffersRepo(token), []);

  const loadOffers = useCallback(async () => {
    dispatch(loadOffersThunk(repo));
  }, [repo]);

  return {
    loadOffers,
    offers,
    currentOfferItem,
  };
}
