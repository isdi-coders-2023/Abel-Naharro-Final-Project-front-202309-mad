import { OfferCard } from '../offer/offer';
import { useOffers } from '../../hooks/use.offers';
import { useEffect } from 'react';
import './list.scss';

export function List() {
  const { loadOffers, offers } = useOffers();

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
