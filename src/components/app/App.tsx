import { Footer } from '../footer/footer.tsx';
import { Header } from '../header/header.tsx';
import './app.scss';
import { AppRoutes } from '../router/app.routes.tsx';
import { useUsers } from '../../hooks/use.users.tsx';
import { useEffect } from 'react';

function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </>
  );
}

export default App;
