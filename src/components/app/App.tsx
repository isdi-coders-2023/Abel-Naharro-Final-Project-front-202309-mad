import { Filter } from '../filter/filter.tsx';
import { Footer } from '../footer/footer.tsx';
import { Header } from '../header/header.tsx';
import { List } from '../list/list.tsx';
import { CategoryHeader } from '../category-header/category.header.tsx';
import './app.scss';

function App() {
  return (
    <>
      <Header />
      <CategoryHeader />
      <Filter />
      <List />
      <Footer />
    </>
  );
}

export default App;
