import { Footer } from '../footer/footer.tsx';
import { Header } from '../header/header.tsx';
import './app.scss';
import { AppRoutes } from '../router/app.routes.tsx';

import { useEffect } from 'react';
import { useOffers } from '../../hooks/use.offers.tsx';

function App() {
  const { loadOffers } = useOffers();

  useEffect(() => {
    loadOffers();
  }, [loadOffers]);

  return (
    <>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </>
  );
}

export default App;
