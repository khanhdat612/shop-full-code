import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UseNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../components/AddCart/AddCart.scss";
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';


const PageAdminMoney=() => {
    const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart
    }=useCart();
const getTotalCartValue = (items = []) => { 
  if (!items.length) return 0;
  const total = items
    .map((item) => item.priceSale * item.quantity)
    .reduce((total, n) => total + n);
  return total;
    };
    const { addItem }=useCart();
    const totalPrice=getTotalCartValue(items);
    const { cartTotal }=useCart()
    
    const [ product, setProduct ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/API_STATUS_ORDER/info.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct(result);
                        }
                    )
                }, []);
    var nf=new Intl.NumberFormat();
    

    return (
        <div>
            <div className='navbar_content'>
                    <div className='PageAdminStatus_navbar_container'>
                        <div className='cart_content'  style={{display:"none"}}>
                                <div className='addCart_content'>
                                    <h3 className='id'>Số sản phẩm trong giỏ hàng: ({totalUniqueItems}) </h3>
                                        <table className='cart_table'>
                                            <tbody>
                                                {items.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className='table_img'>
                                                                <img src={item.img} style={{ height: "6rem" }} alt="err" />
                                                            </td>
                                                            <td className='table_title'>{item.title}</td>
                                                            <td className='table_price'>{item.priceSale} </td>
                                                            <td className='table_quantity'>SỐ LƯỢNG {item.quantity}</td>
                                                            <td className='table_btn'>
                                                                <button onClick={() => updateItemQuantity(item.id, item.quantity-1)} className='btn_tru'>-</button>
                                                                <button onClick={() => updateItemQuantity(item.id, item.quantity+1)} className='btn_cong'>+</button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                </div>
                    </div>
                    <h1>DOANH THU ĐƠN HÀNG</h1>
                    <div className='PageAdminStatus_navbar_container_content'>
                         <div className='PageAdminStatus_navbar_container_content_title'>
                            <table className='table table-1'>
                            <tr className='tr' style={{color: "red"}}>
                                <th style={{width:"10%"}}>MÃ ĐƠN</th>
                                <th style={{width:"30%"}}>TÊN NGƯỜI NHẬN</th>
                                <th style={{width:"30%"}}>SỐ ĐIỆN THOẠI</th>
                                <th style={{width:"30%"}}>DOANH THU</th>
                            </tr>
                            </table>
                            <div className='total_table'>
                                    {product.map((item, index) => {
                                        return (
                                            <div className='table_info'>
                                                <table className='table table-1'key={index}>
                                                    <tr className='tr'>
                                                        <th style={{width:"10%"}}>{ item.id }</th>
                                                        <th style={{width:"30%"}}>{ item.name}</th>
                                                        <th style={{width:"30%"}}>{item.phone}</th>
                                                        <th style={{width:"30%"}}>{nf.format(totalPrice)} VNĐ</th>
                                                    </tr>
                                                </table>
                                            </div>
                                    )
                                    })}
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default PageAdminMoney;