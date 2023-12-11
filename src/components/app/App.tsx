import { Filter } from '../filter/filter.tsx';
import { Footer } from '../footer/footer.tsx';
import { Header } from '../header/header.tsx';
import { List } from '../list/list.tsx';
import { SubHeaders } from '../subHeader/subHeader.tsx';
import './app.scss';

function App() {
  return (
    <>
      <Header />
      <SubHeaders />
      <Filter />
      <List />
      <Footer />
    </>
  );
}

export default App;
