import './App.css';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import ContactPage from './components/pages/ContactPage';

function App() {
    return (
        <div id="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
