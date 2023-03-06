import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { UseNavigate } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddCart.scss";
import closeForm from "../../images/close.png";
import OderNow from '../../components/OderNow/OderNow.js';
import Installments from '../../components/Installments/Installments.js';


const AddCart=() => {
   function toastRemove() {
        toast.error('Đã xóa sản phẩm !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
     const [ isActive, setIsActive ]=useState(false);
     function handleOrder() {
         setIsActive(isActive => !isActive);
    }
    const [ Active, setActive]=useState(false);
    function handleClick() {
        setActive(Active => !Active);
    }

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
    const { cartTotal }=useCart()
    var nf=new Intl.NumberFormat();
    const cache=JSON.parse(window.localStorage.getItem('react-use-cart'));
    console.log(typeof cache.items);
    const values=cache.items;
    console.log(values);
    values.forEach(element => {
        console.log(element.id);
    });
    if (isEmpty) return <h1 className='no_product'>Chưa có sản phẩm nào trong giỏ hàng</h1>
    return (
        <section className='cart_content'>
            <div className='cart_content'>
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
                                                <td className='table_price'>{nf.format(item.priceSale)} </td>
                                                <td className='table_quantity'>SỐ LƯỢNG {item.quantity}</td>
                                                <td className='table_btn'>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity-1)} className='btn_tru'>-</button>
                                                    <button onClick={() => updateItemQuantity(item.id, item.quantity+1)} className='btn_cong'>+</button>
                                                    <div className='btn_delete' onClick={toastRemove}>
                                                        <button onClick={() => removeItem(item.id)} className='btn_remove'>Xóa</button>
                                                           <ToastContainer />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        <h3>Tổng tiền sản phẩm: {nf.format(totalPrice)} VNĐ</h3>
                </div>
                
                <div className='product_order order_button'>
                        <div onClick={handleOrder}  className='product_order_now'>
                            <p style={{padding:"4px"}} >Đặt hàng</p>
                        </div>
                    </div>
            </div>
            <div className={isActive ? "display_Installments active_Installments" :"display_Installments close_Installments" }>
                    <div className='close_Installments'>
                        <Installments  />
                        <img onClick={handleOrder}  className='close_Installments--icon' src={closeForm}  alt="errol" />
                    </div>    
            </div>
            
                <div className={Active ? "display_Installments active_Installments" :"display_Installments close_Installments" }>
                    <div className='close_Installments'>
                        <OderNow  />
                        <img onClick={handleClick}  className='close_Installments--icon OderNow_Installments--icon' src={closeForm}  alt="errol" />
                    </div>    
                </div>
        </section>
    );
};

export default AddCart;