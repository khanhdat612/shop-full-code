import React from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import '../components/Head/Header.scss';
import '../components/Footer/Footer.scss';
import '../components/ProductItem/ProductItem.scss';
import './Login';
import './ReGister';
import HomePage from './HomePage/HomePage.js';
import { CartProvider } from "react-use-cart";
import PageAndroid from './PageAndroid/Android.js';
import PageIOS from './PageIos/PageIos.js';
import PageCart from './PageCart/PageCart.js';
import PageAccessory from './PageAccessory/PageAccessory.js';
import ProductDetail from './ProductDetail/ProductDetail.js';
import Installments from '../components/Installments/Installments.js';
import OderNow from '../components/OderNow/OderNow.js';
import OrderSuccess from './OrderSuccess/OrderSuccess';
// import ProductItem from '../components/ProductItem/ProductItem.js';
// import Footer from '../components/Footer/Footer.js';
// import Header from '../components/Head/Header.js';
// import HeadAdmin from '../components/HeadAdmin/HeadAdmin.js';
import PageAdmin from './PageAdmin/PageAdmin';
import PageAdminUser from './PageAdminUser/PageAdminUser';
import PageAdminProfit from './DeletePageAdminProfit/PageAdminProfit';
import PageAdminOrders from './PageAdminOrders/PageAdminOrders';
import PageAdminStatus from './PageAdminStatus/PageAdminStatus';
// import item from '../../components/ProductItem/ProductItem.js';
import Login from './Login';
import ReGister from './ReGister';
import UserOrder2 from './UserOrder/UserOrder2.js';
import Page_Admin from './PAGE_ADMIN/Page_Admin';
import PageAdmin2 from './PageAdmin/PageAdmin2';
import ProductDetailAccessory from './ProductDetailAccessory/ProductDetailAccessory.js';


function App() {
  return (

    // <CartProvider>
    <div>
      {/* <Login /> */}
      <HomePage />
      {/* <Header/> */}
      {/* <OrderSuccess /> */}
      {/* <Footer/> */}
      {/* <PageAndroid/> */}
      {/* <PageIOS /> */}
      {/* <HeadAdmin /> */}
      {/* <ProductItem/> */}
      {/* <ProductDetail/> */}
      {/* < OderNow /> */}
      {/* <Cart/> */}
      {/* <PageAccessory /> */}
      {/* <PageCart /> */}
      {/* <PageAdmin /> */}
      {/* <PageAdmin2 /> */}
      {/* <Page_Admin /> */}
      {/* <PageAdminOrders /> */}
      {/* <PageAdminStatus /> */}
      {/* <UserOrder /> */}
      {/* <ProductDetailAccessory/> */}
    </div>
    // </CartProvider>

  );
}

export default App;
