import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/global.scss';
import App from './views/App';
import Login from './views/Login';
import ReGister from './views/ReGister';
import RegisterSuccess from './views/RegisterSuccess/RegisterSuccess.js';
// import PageAndroid from './views/PageAndroid/Android.js';
import PageAndroid2 from './views/PageAndroid/Android2.js';
import PageIOS from './views/PageIos/PageIos.js';
import PageCart from './views/PageCart/PageCart.js';
import PageAccessory from './views/PageAccessory/PageAccessory';
import UserOrder2 from './views/UserOrder/UserOrder2';
import CheckInfo from './views/CheckInfo/CheckInfo.js';
import OrderSuccess from './views/OrderSuccess/OrderSuccess';
// import ProductDetail from './views/ProductDetail/ProductDetail.js';
import PageAdmin from './views/PageAdmin/PageAdmin';
import PageAdminUser from './views/PageAdminUser/PageAdminUser';
import PageAdminOrders from './views/PageAdminOrders/PageAdminOrders';
import PageAdminStatus from './views/PageAdminStatus/PageAdminStatus';
import PageAdminProfit from './views/DeletePageAdminProfit/PageAdminProfit';
import Header from './components/Head/Header';
import PageAdmin2 from './views/PageAdmin/PageAdmin2';
import PageAdminIos from './views/PageAdminIos/PageAdminIos';
import PageAdminAccess from './views/PageAdminAccessrosy/PageAdminAccessrosy';
import PageAdminUser2 from './views/PageAdminUser/PageAdminUser2';
import DetailAccessory from './views/ProductDetailAccessory/ProductDetailAccessory.js'
import ProductDetailAndroid from './views/ProductDetailAndroid/ProductDetailAndroid.js';
import ProductDetail from './views/ProductDetail/ProductDetail.js';
import PageAdminMoney from './views/PageAdminMoney/PageAdminMoney.js'
import PageAdminCartProduct from './views/PageAdminCartProduct/PageAdminCartProduct.js';
// import Product_Android from './components/Product_Android/Product_Android';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<ReGister/>} />
        <Route path='/RegisterSuccess' element={<RegisterSuccess />} />
        
        {/* <Route path='/android' element={<PageAndroid />} /> */}
        <Route path='/android' element={<PageAndroid2 />} />
        <Route path='/iphone' element={<PageIOS />} />
        <Route path='/accessory' element={<PageAccessory />} />

        <Route path='/detailAccessory' element={<DetailAccessory />} />
        <Route path='/detailAndroid' element={<ProductDetailAndroid />} />
        <Route path='/detailIos' element={<ProductDetail />} />

        <Route path='/PageCart' element={<PageCart/>} />
        <Route path='/CheckInfo' element={<CheckInfo />} />
        <Route path='/OrderSuccess' element={<OrderSuccess />} />

        <Route path='/listProduct' element={<PageAdmin2/>} />
        <Route path='/listUser' element={<PageAdminUser/>} />
        <Route path='/listUser2' element={<PageAdminUser2/>} />
        <Route path='/listOrders' element={<PageAdminOrders/>} />
        <Route path='/orderStatus' element={<PageAdminStatus/>} />
        <Route path='/logOut' element={<Login />} />
        <Route path='/MoneyProduct' element={<PageAdminCartProduct />} />

        
        <Route path='/product_Android' element={<PageAdmin />} />
        <Route path='/product_ios' element={<PageAdminIos />} />
        <Route path='/product_accessory' element={<PageAdminAccess />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


