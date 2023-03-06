import React from 'react';
import { useState, useEffect } from 'react';
// import { UseState } from 'react';
// import { UseEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "typeface-roboto";
import "./Header.scss";
// import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import AddCart from '../../components/AddCart/AddCart.js';
import ReGister from '../../views/ReGister.js';
import Login from '../../views/Login.js';
import Logo from "../../images/search.jpg";
import Cart from "../../images/cart.png";
import Menu from "../../images/menu.png";
import User from "../../images/user.png";


function Header() {
  
  const [ auth, setAuth ]=useState('');
  
  // let navigate=useNavigate();
  
  useEffect(() => {
    var auth =localStorage.getItem('username');
    setAuth(auth);
  },
    [])
  
  
    const [ cart, setCart ]=useState('');
    // function clearStorage() {
      useEffect(() => {
        var  cart=localStorage.getItem('react-use-cart');
        setCart(cart);
      //   for (key in cart) {
      //   if (cart.hasOwnProperty(key)) {
      //     console.log(cart[key])
      //   }
      // }

      // console.log(cart);
      // console.log(typeof cart);
      }, [])
  
  // }
  
  
  return (
      <div className='Header_all'>
      <div className='Head'>
        <Link to="/">
            <div className='Head_left' style={{cursor:"pointer"}}>
                  <div className='Head_left_logo'></div>
                  <h3 className='Head_left_name'>MOBILE SHOP</h3>
            </div>
        </Link>
            <div className='Head_right'>
                <ul>
                    <li> <a>MORE</a></li>   
                    <li> <a >CONTACT</a></li>   
                    <li> <a >ACCOUNT</a></li>   
                    <li> <a >ABOUT</a></li>   
                </ul>
            </div>
        </div>
        <div className='input'>
          <div className='input_search'>
            <input placeholder='Nhập tên sản phẩm bạn cần tìm.'/>
            <img  src={Logo} width='20px' height='20px' alt="errol" />
          </div>
          <div className='listMenu'>
              <div className='listMenu_user'>
                <img className='listMenu_user_img' src={User} width='30px' height='30px' alt="errol" />
                <div className='username'>
                  {auth}
                  <div className='login_register'>
                      <ul>
                        <li><Link to="/login">Đăng Nhập</Link></li>
                        <li><Link to="/CheckInfo">Chi tiết đơn hàng</Link></li>
                        <li><Link to="/login" >Thoát</Link></li>
                      </ul>
                  </div>
                </div>
              </div>
              <Link to="/PageCart">
                  <div className='listMenu_cart'>
                    <img title='Sản Phẩm Có Trong Giỏ' src={Cart} width='30px' height='30px' alt="errol" />
                  </div>
              </Link>
              <Link to="/CheckInfo">
                  <div className='listMenu_menu'>
                    <img title='Kiếm Tra Đơn Hàng' src={Menu} width='20px' height='20px' alt="errol" />
                  </div>
              </Link>
          </div>
      </div>
      
      
      </div>
  )
}
export default Header;