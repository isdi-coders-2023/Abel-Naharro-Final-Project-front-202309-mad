import { Footer } from '../footer/footer.tsx';
import { Header } from '../header/header.tsx';
import './app.scss';
import { AppRoutes } from '../router/app.routes.tsx';

function App() {
  return (
    <>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </>
  );
}

export default App;
