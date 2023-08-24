import './App.css';
import ProductList from './components/ProductList';
import ProductListContainer from './containers/ProductListContainer';
import Header from './components/Header';
import products from './data/products.json';

function App() {
  return (
    <div id="App">
      <div id="pageWrapper">
        <Header></Header>
        <ProductListContainer></ProductListContainer>
      </div>
    </div>
  );
}

export default App;
