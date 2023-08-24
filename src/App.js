import './App.css';
import ProductList from './components/ProductList';
import ProductListContainer from './containers/ProductListContainer';
import products from './data/products.json';

function App() {
  const obj =
  {
    name: "name of object",
    price: "10.00 CAD",
    description: "insert description here"
  }
  return (
    <div className="App">
      <ProductListContainer></ProductListContainer>
    </div>
  );
}

export default App;
