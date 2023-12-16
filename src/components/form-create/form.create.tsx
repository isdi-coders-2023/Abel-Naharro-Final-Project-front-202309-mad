import { SyntheticEvent } from 'react';
import './form.create.scss';
import { useNavigate } from 'react-router-dom';
import { useOffers } from '../../hooks/use.offers';

export function FormCreate() {
  // const [hasLogin, setHasLogin] = useState(false);
  // const { login, loggedUser } = useUsers();
  const navigate = useNavigate();

  const { createOffer } = useOffers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    createOffer(formData);

    navigate('/');
  };

  return (
    <section className="section-create">
      <div className="create-card">
        <h2>Share offer</h2>
        <form name="create-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image-file">Image</label>
            <input type="file" id="image-file" name="image" required />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" required />
          </div>
          <div>
            <label htmlFor="regular-price">Regular price</label>
            <input
              type="number"
              id="regular-price"
              name="regularPrice"
              required
            />
          </div>
          <div>
            <label htmlFor="offer-price">Offer price</label>
            <input type="number" id="offer-price" name="offerPrice" required />
          </div>
          {/* <div>
            <label htmlFor="coupon-needed">Coupon needed?</label>
            <input type="checkbox" id="coupon-needed" name="coupon-needed" />
          </div> */}
          <div>
            <label htmlFor="coupon">Coupon</label>
            <input type="text" id="coupon" name="coupon" required />
          </div>
          <div>
            <label htmlFor="url">Url offer</label>
            <input type="text" id="url" name="offerURL" required />
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
            <input type="submit" value="Share Offer" />
          </div>
        </form>
      </div>
    </section>
  );
}
