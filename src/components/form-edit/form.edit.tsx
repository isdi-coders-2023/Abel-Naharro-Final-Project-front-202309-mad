import { SyntheticEvent } from 'react';
import './form.edit.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../loading/loading';
import { Offer } from '../../model/offer';
import { useOffers } from '../../hooks/use.offers';
//import { useOffers } from '../../hooks/use.offers';

export function FormEdit() {
  const { id } = useParams();
  const { offers } = useOffers();
  const navigate = useNavigate();

  if (offers.length === 0) {
    return <Loading />;
  }
  const offerItem = offers.find((item: Offer) => item.id === id) as Offer;
  console.log('OFFER EDIT: ', offerItem);
  console.log(offerItem.author);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData);
    // createOffer(formData);

    navigate('/');
  };

  return (
    <section className="section-edit">
      <div className="edit-card">
        <h2>Edit offer</h2>
        <form name="edit-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image-file">Image</label>
            <input type="file" id="image-file" name="image" />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={offerItem.title}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
          </div>
          <div>
            <label htmlFor="regular-price">Regular price</label>
            <input type="number" id="regular-price" name="regularPrice" />
          </div>
          <div>
            <label htmlFor="offer-price">Offer price</label>
            <input type="number" id="offer-price" name="offerPrice" />
          </div>
          {/* <div>
            <label htmlFor="coupon-needed">Coupon needed?</label>
            <input type="checkbox" id="coupon-needed" name="coupon-needed" />
          </div> */}
          <div>
            <label htmlFor="coupon">Coupon</label>
            <input type="text" id="coupon" name="coupon" />
          </div>
          <div>
            <label htmlFor="url">Url offer</label>
            <input type="text" id="url" name="offerURL" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="mobile">Mobiles</option>
              <option value="tablets">Tablets</option>
              <option value="computers">Computers</option>
              <option value="games">Games</option>
              <option value="digital">Digital content</option>
              <option value="others">Others</option>
            </select>
          </div>
          {/* <div>
            <label htmlFor="date-to-start">Date start offer</label>
            <input type="date" id="date-to-start" name="dateToStart" required />
          </div>
          <div>
            <label htmlFor="date-to-end">Date end offer</label>
            <input type="date" id="date-to-end" name="dateToEnd" required />
          </div> */}
          <div className="share-container">
            <input type="submit" value="Edit offer" />
          </div>
        </form>
      </div>
    </section>
  );
}
