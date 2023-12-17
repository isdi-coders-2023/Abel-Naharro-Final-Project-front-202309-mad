import { SyntheticEvent, useState } from 'react';
import './form.edit.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../loading/loading';
import { Offer } from '../../model/offer';
import { useOffers } from '../../hooks/use.offers';
//import { useOffers } from '../../hooks/use.offers';

export function FormEdit() {
  const { id } = useParams();
  const { offers, updateOffer } = useOffers();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  if (offers.length === 0) {
    return <Loading />;
  }

  const offerItem = offers.find((item: Offer) => item.id === id) as Offer;

  if (!offerItem) {
    throw new Error(`Offer with id ${id} not found`);
  }

  const handleSubmitEdit = (event: SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    updateOffer(offerItem.id, formData);
    setIsEdit(true);

    setInterval(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <section className="section-edit">
      <div className="edit-card">
        <h2>Edit offer</h2>
        <form name="edit-form" id="edit-form" onSubmit={handleSubmitEdit}>
          <div>
            <img
              src={offerItem.image.cloudinaryURL}
              alt="offer image"
              width={100}
            />
          </div>
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
              defaultValue={offerItem.title}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              defaultValue={offerItem.description}
            />
          </div>
          <div>
            <label htmlFor="regular-price">Regular price</label>
            <input
              type="number"
              id="regular-price"
              name="regularPrice"
              defaultValue={offerItem.regularPrice}
            />
          </div>
          <div>
            <label htmlFor="offer-price">Offer price</label>
            <input
              type="number"
              id="offer-price"
              name="offerPrice"
              defaultValue={offerItem.offerPrice}
            />
          </div>
          {/* <div>
            <label htmlFor="coupon-needed">Coupon needed?</label>
            <input type="checkbox" id="coupon-needed" name="coupon-needed" />
          </div> */}
          <div>
            <label htmlFor="coupon">Coupon</label>
            <input
              type="text"
              id="coupon"
              name="coupon"
              defaultValue={offerItem.coupon}
            />
          </div>
          <div>
            <label htmlFor="url">Url offer</label>
            <input
              type="text"
              id="url"
              name="offerURL"
              defaultValue={offerItem.offerURL}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              defaultValue={offerItem.category}
            >
              <option value="mobiles">Mobiles</option>
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

          {isEdit ? (
            <div className="alert-confirm-delete">
              <p>The offer has been edited correctly</p>
            </div>
          ) : (
            <div className="button-edit-container">
              <input type="submit" value="Edit offer" />
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
