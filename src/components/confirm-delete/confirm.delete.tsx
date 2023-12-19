import { useNavigate, useParams } from 'react-router-dom';
import './confirm.delete.scss';
import { SyntheticEvent, useState } from 'react';
import { useOffers } from '../../hooks/use.offers';
// import { useUsers } from '../../hooks/use.users';

export function ConfirmDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteOffer } = useOffers();
  // const { loggedUser } = useUsers();
  const [isDelete, setIsDelete] = useState(false);

  const handleClickToDelete = (event: SyntheticEvent) => {
    event.preventDefault();

    deleteOffer(id!);
    setIsDelete(true);

    if (isDelete) {
      setInterval(() => {
        setIsDelete(false);
        navigate('/my-profile');
      }, 2000);
    }
  };

  return (
    <section className="confirm-delete">
      <div className="delete-card">
        <h2>Delete offer</h2>
        <p>Are you sure you want to remove the offer?</p>
        {/* <p>{id}</p> */}
        {isDelete ? (
          <div className="alert-confirm-delete">
            <p>Offer successfully deleted </p>
          </div>
        ) : (
          <button className="btn btn-delete" onClick={handleClickToDelete}>
            Delete
          </button>
        )}
      </div>
    </section>
  );
}
