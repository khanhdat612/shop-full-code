import React from 'react';
import "typeface-roboto";
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "react-use-cart";
import { useState } from "react";
import "../ProductItemAccessory/ProductItemAccessory.scss";
import addcart from "../../images/addcart.png";
import addlove from "../../images/love.png";

const Item = (props) => {

      const { addItem } = useCart();

    const [ Active, setActive]=useState(false);
        function handleClick() {
        setActive(Active => !Active);
    }

    function toastMessage() {
        toast.success('Đã thêm vào giỏ hàng !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
     }
    return (
                <div className='product_block'>
                    <div className='item_container'>
                        <div className='item_container_img'>
                            <Link to="/detailAndroid">
                                <img src={props.picture} alt="Đang chờ database" />
                            </Link>
                            </div>
                            <div className='item_container_sale'>
                                <p>sale</p>
                            </div>
                            <div onClick={handleClick}  className={Active? " item_container_love active_love":null}>
                                <div onClick={toastMessage} className='toastMess'>
                                    <ToastContainer />
                                    <div onClick={() => addItem(props.item)} className='item_container_love'>
                                        <img src={addlove} alt="thêm vào gio hàng" />
                                    </div>
                                </div>
                            </div>
                            <Link to="/detailAndroid">
                                <div className='item_container_price'>
                                    <div className='item_container_price_title'>
                                        <h3>{props.name}</h3>
                                    </div>
                                    <div className='item_container_price_vnd'>
                                        <div className='item_container_price_vnd_left'>
                                            <h5 className='item_container_price_vnd_left--p1'>{props.sale}</h5>                        
                                            <p className='item_container_price_vnd_left--p2'>{props.money}</p>                        
                                        </div>
                                        <div className='item_container_price_vnd_right'>
                                            <div className='item_container_price_vnd_right_item'>
                                                <img src={addcart} alt="A" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    <div className='item_container_background'></div>
                </div>
    )
}

export default Item;