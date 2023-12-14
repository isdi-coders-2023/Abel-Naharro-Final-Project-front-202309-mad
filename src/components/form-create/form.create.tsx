import { SyntheticEvent } from 'react';
import './form.create.scss';
// import { LoginUser } from '../../model/user';
// import { useUsers } from '../../hooks/use.users';
// import { useNavigate } from 'react-router-dom';

export function FormCreate() {
  // const [hasLogin, setHasLogin] = useState(false);
  // const { login, loggedUser } = useUsers();
  // const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    // const formLoginElement = event.target as HTMLFormElement;
    // const data = {
    //   email: (formLoginElement.elements.namedItem('email') as HTMLInputElement)
    //     .value,
    //   password: (
    //     formLoginElement.elements.namedItem('password') as HTMLInputElement
    //   ).value,
    // } as LoginUser;

    // console.log(data);

    // login(data);
    // setHasLogin(true);

    // if (hasLogin) navigate('/');

    // console.log(hasLogin);
    // console.log(loggedUser);
  };

  return (
    <section className="section-create">
      <div className="create-card">
        <h2>Share offer</h2>
        <form name="create-form" onSubmit={handleSubmit}>
          {/* <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <p>Forgot your password?</p>
          </div> */}
          <div className="share-container">
            <input type="submit" value="Share Offer" />
          </div>
        </form>
      </div>
    </section>
  );
}
