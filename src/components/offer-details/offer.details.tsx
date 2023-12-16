import { useParams } from 'react-router-dom';
import './offer.details.scss';
import { useOffers } from '../../hooks/use.offers';
import { Offer } from '../../model/offer';
import { Loading } from '../loading/loading';

export function OfferDetails() {
  const { id } = useParams();
  const { offers } = useOffers();

  if (offers.length === 0) {
    // console.log(loadExternalOffer(id!));
    // return <>Loading</>;
    return <Loading />;
  }

  const offerItem = offers.find((item) => item.id === id) as Offer;

  const date = new Date(offerItem.createdAt);
  const formattedDateOfCreated = date.toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const differencePrice = offerItem.offerPrice - offerItem.regularPrice;
  const percentageDiscount = (differencePrice / offerItem.regularPrice) * 100;

  const urlOffer = new URL(offerItem.offerURL);
  const hostNameOffer = urlOffer.host;
  const cleanHostNameOffer = hostNameOffer.replace('www.', '');

  let description = offerItem.description;
  if (description.length > 150) {
    description = description.substring(0, 150) + '...';
  }

  return (
    <>
      {offerItem && (
        <section className="card-offer-details" role="contentinfo">
          <div>
            <div className="content-image">
              <img src={offerItem.image.cloudinaryURL} alt="offer image" />
            </div>
            <div className="content-info">
              <div className="content-info-header">
                <div className="buttons-vote">
                  <button className="btn-vote-down" title="vote-down">
                    <i className="fa-regular fa-thumbs-down"></i>
                  </button>
                  <span className="status">+1000</span>
                  <button className="btn-vote-up" title="vote-up">
                    <i className="fa-regular fa-thumbs-up"></i>
                  </button>
                </div>
                <div className="created-at">
                  <p>
                    <i className="fa-regular fa-calendar-days"></i>{' '}
                    {formattedDateOfCreated}
                  </p>
                </div>
              </div>
              <div className="title">{offerItem.title}</div>
              <div className="subtitle">
                <span className="offer-price">{offerItem.offerPrice}€</span>{' '}
                <span className="regular-price">{offerItem.regularPrice}€</span>
                <span className="discount">({percentageDiscount}%)</span>
                <span className="brand-store">{cleanHostNameOffer}</span>
              </div>
              <div className="description">{description}</div>
              <div className="author">
                <img src="https://placehold.co/25x25/webp" alt="author" />
                <p>{offerItem.author.userName}</p>
              </div>
              <div className="offer-link">
                <a href={offerItem.offerURL} target="_blank" title="Link offer">
                  Oppen Offer
                </a>
              </div>
              {offerItem.isCoupon && (
                <div className="offer-coupon">{offerItem.coupon}</div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
