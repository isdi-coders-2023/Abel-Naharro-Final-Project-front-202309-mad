import { OfferCard } from '../offer/offer';
import { useOffers } from '../../hooks/use.offers';

import './list.scss';
import { useEffect } from 'react';

export function List() {
  const { offers, loadOffers } = useOffers();

  useEffect(() => {
    loadOffers();
  }, [loadOffers]);

  return (
    <section className="list-offers" role="main">
      {offers.map((item) => (
        <OfferCard key={item.id} offerItem={item} />
      ))}
    </section>
  );
}
