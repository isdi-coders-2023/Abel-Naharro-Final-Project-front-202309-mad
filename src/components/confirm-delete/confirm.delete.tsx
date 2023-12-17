import { useNavigate, useParams } from 'react-router-dom';
import './confirm.delete.scss';
import { SyntheticEvent } from 'react';
import { useOffers } from '../../hooks/use.offers';

export function ConfirmDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteOffer } = useOffers();

  const handleClickToDelete = (event: SyntheticEvent) => {
    event.preventDefault();

    // const form = event.target as HTMLFormElement;
    // const formData = new FormData(form);
    // console.log(formData);
    // // createOffer(formData);
    // console.log('DELETE');
    deleteOffer(id!);
    navigate('/');
  };

  return (
    <section className="confirm-delete">
      <div className="delete-card">
        <p>Delete offer</p>
        <p>Are you sure you want to remove the offer?</p>
        <p>{id}</p>
        <button className="btn btn-delete" onClick={handleClickToDelete}>
          Delete
        </button>
      </div>
    </section>
  );
}
