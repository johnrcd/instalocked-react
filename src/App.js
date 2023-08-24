import './App.css';
import ProductListContainer from './containers/ProductListContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="App">
      <div id="pageWrapper">
        <Header></Header>
        <ProductListContainer></ProductListContainer>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
