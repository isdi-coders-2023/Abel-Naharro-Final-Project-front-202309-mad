import { useNavigate, useParams } from 'react-router-dom';
import './confirm.delete.scss';
import { SyntheticEvent } from 'react';

export function ConfirmDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData);
    // createOffer(formData);

    console.log('DELETE');

    navigate('/');
  };

  return (
    <section className="confirm-delete">
      <div className="delete-card">
        <p>Delete offer</p>
        <p>Are you sure you want to remove the offer?</p>
        <p>{id}</p>
        <button className="btn btn-delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </section>
  );
}
