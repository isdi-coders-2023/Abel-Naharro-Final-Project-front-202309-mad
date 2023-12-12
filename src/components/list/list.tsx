import { Offer } from '../offer/offer';
import './list.scss';

export function List() {
  return (
    <section className="list-offers" role="main">
      <Offer />
    </section>
  );
}
