import React from 'react';
import "./assets/app.css";
import ProductDetail from './components/ProductDetail';
import Store from './components/Store';
import NavBar from './shared/NavBar';
import CartDetail from './components/CartDetail';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <section className="app-container">
      <Routes>
        <Route path="/cart" element={<CartDetail/>} />
        <Route path="/products/product/:id" element={<ProductDetail/>}/>
        <Route path="/products" element={<Store/>}/>
        <Route path="*" element={<Navigate to="/products" />}/>
      </Routes>
      </section>
    </Provider>
  );
}

export default App;
