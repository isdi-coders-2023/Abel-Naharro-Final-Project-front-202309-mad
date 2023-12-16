import { Link, useNavigate } from 'react-router-dom';
import { useOffers } from '../../hooks/use.offers';
import { useUsers } from '../../hooks/use.users';
//import { Offer } from '../../model/offer';
import './user.profile.scss';
import { SyntheticEvent } from 'react';

export function UserProfile() {
  const { logout, loggedUser } = useUsers();
  const { offers } = useOffers();
  const navigate = useNavigate();

  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    logout();
    navigate('/');
  };

  const offersByUser = offers.filter((item) => {
    return item.author.id === loggedUser?.id;
  });

  console.log(loggedUser);
  return (
    <section className="user-profile">
      <div>
        <button onClick={handleClick} onKeyDown={logout}>
          Log Out
        </button>
      </div>
      <div>
        <p>My data:</p>
        <p></p>
        <p>Name: {loggedUser?.userName}</p>
        <p>Email: {loggedUser?.email}</p>
      </div>
      <div>
        <p>My offers:</p>
        <div>
          <ul>
            {offersByUser.map((item) => (
              <li>
                {item.title}
                <Link to={`/offer/` + item.id}>View</Link>
                <Link to={`/offer/edit/` + item.id}>Edit</Link>
                <Link to={`/offer/delete/` + item.id}>Delete</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}