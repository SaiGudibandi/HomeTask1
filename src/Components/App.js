import '../Styles/App.css';
import Counter from './Counter';
import GenreToggle from './GenreToggle';
import SearchForm from './SearchForm';

function App() {
  return (
    <div>
      <h1>Home Task 1</h1>
      <div className="container">
        <div className="item">
          <Counter title="Button counter" />
        </div>
        <div className="item">
          <SearchForm title="Movies Search" />
        </div>
        <div className="item">
          <GenreToggle title="Toggle Genre" />
        </div>
      </div>
    </div>
  );
};

export default App;
