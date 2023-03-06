import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartProvider } from "react-use-cart";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminUser.scss";
import "./PageAdminAccessrosy.scss";
import PageTotal from '../PageAdminMoney/PageAdminMoney.js';


const PageAdminOrders=() => {

      const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart
    }=useCart();

    // total price    
const getTotalCartValue = (items = []) => { 
  if (!items.length) return 0;
  const total = items
    .map((item) => item.priceSale * item.quantity)
    .reduce((total, n) => total + n);
  return total;
    };
    
    const { addItem }=useCart();
    const totalPrice=getTotalCartValue(items);
  // -------
    const { cartTotal }=useCart()



   const [ product, setProduct ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/API_ADMIN_USER_ORDER/Api_UserOrder.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct(result);
                        }
                    )
                }, []);
      const deleteProduct = (id) => {
    axios.delete('http://localhost/newCode/API_ADMIN/API_DELETE_ORDER/delete.php', { data: { id: id } })
      .then((result) => { 
        product();
      }).catch(() => {
        alert("Đã xóa đơn hàng!");
        window.location.reload(true);
      })
  } 
  return (
      <CartProvider>
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdmin_navbar_container'>
                    <h1>DANH SÁCH ĐƠN HÀNG</h1>
                        <div className='PageAdmin_navbar_container_content'>
                            <div className='PageAdmin_navbar_container_content_title'>
                <table className='table table-1'>
                            <tr className='tr' style={{color: "red", fontSize:"15px"}}>
                                <th className='td-01 '>MÃ ĐƠN</th>
                                <th className='td-02'>NGƯỜI ĐẶT HÀNG</th>
                                <th className='td-03'>SỐ ĐIỆN THỌAI</th>
                                <th className='td-05 '>ĐỊA CHỈ NHẬN HÀNG</th>
                                <th className='td-04' style={{width:"12%"}}>SỐ CĂN CƯỚC</th>
                                <th className='td-06 td-07 ' >HỦY ĐƠN</th>
                            </tr>
                </table>
                {product.map((item, index) => {
                  return (
                          <table className='table table-1' key={index}>
                            <tr className='tr'>
                                <td className='td td-01'>{ item.id }</td>
                                <td className='td td-02'>{ item.name}</td>
                                <td className='td td-03'>{ item.phone}</td>
                                <td className='td td-05'>{ item.address}</td>
                              <td className='td td-06' style={{width:"12%"}}>{item.number}</td>
                              <td className='td-07'>
                                <Link className='Delete' to="" onClick={() => deleteProduct(item.id)}>
                                XÓA
                                </Link>
                                </td>
                            </tr>
                          </table>
                  )
                })}

              </div>
                        </div>
                </div>
            </div>

      </div>
      {/* <PageTotal /> */}
      </CartProvider>
    );
};

export default PageAdminOrders;