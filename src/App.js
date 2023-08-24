import './App.css';
import ProductList from './components/ProductList';
import ProductListContainer from './containers/ProductListContainer';
import Header from './components/Header';
import products from './data/products.json';

function App() {
  return (
    <div className="App">
      <div className="pageWrapper">
        <Header></Header>
        <ProductListContainer></ProductListContainer>
      </div>
    </div>
  );
}

export default App;
