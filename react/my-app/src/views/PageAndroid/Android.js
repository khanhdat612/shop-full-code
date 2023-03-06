import React from 'react';
import { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { CartProvider } from "react-use-cart";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import AddCart2 from '../../components/AddCart/AddCart2.js';
import 'react-toastify/dist/ReactToastify.css';
import "typeface-roboto";
import "./Android.scss";
import "./ProductItem.scss";
import addcart from "../../images/addcart.png";
import addlove from "../../images/love.png";

// import Productitem from '../../components/ProductItem/ProductItem.js';

const Android = (android) => { 


    //   const { addItem } = useCart();

        const [ listData, setData ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/API_DATA_ANDROID/API_Android.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setData(result);
                        }
                    )
                }, []);
    ///
    const { addItem }=useCart();
    
    const [ Active, setActive]=useState(false);
        function handleClick() {
        setActive(Active => !Active);
    }

    function toastMessage() {
        toast.success('Đã thêm vào giỏ hàng !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }
    function addItem2() {
      console.log(android.name)
    }
    // const [ cartItem, setCartItem ]=useState();
 var nf = new Intl.NumberFormat();
   
    return (
        <CartProvider>
            <div className='container_pageandroid'>
                <div className='header'>
                    <Header />
                </div>
                <div className='android'>
                    <div className='container'>
                        <div className='container_android'>
                            <h2>Android</h2>
                        </div>
                    </div>
                </div>
                <div className='product_item'>
                    {listData.map((android) => {
                        return (
                            <div className='product_block' key={android.id}>
                                <div className='item_container'>
                                    <div className='item_container_img'>
                                        <Link to="/detailAndroid">
                                            <img src={"data:image/png;base64,"+android.image} alt="Hình ảnh sản phẩm" />
                                        </Link>
                                    </div>
                                    <div className='item_container_sale'>
                                        <p >sale</p>
                                    </div>
                                    <div onClick={handleClick} className={Active? " item_container_love active_love":null}>
                                        <div onClick={toastMessage} className='toastMess'>
                                            {/* <ToastContainer /> */}
                                            {/* <div  className='item_container_love'>
                                                <img src={addlove} alt="thêm vào giỏ hàng" />
                                            </div> */}
                                            <div onClick={() => addItem2(android.id)} className='item_container_love'>
                                                <img src={addlove} alt="thêm vào giỏ hàng" />
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/detailAndroid">
                                        <div className='item_container_price'>
                                            <div className='item_container_price_title'>
                                                <h3>{android.name}</h3>
                                                {/* <h3>{android.id}</h3> */}
                                            </div>
                                            <div className='item_container_price_vnd'>
                                                <div className='item_container_price_vnd_left'>
                                                    <h5 className='item_container_price_vnd_left--p1'>{nf.format(android.price)}</h5>
                                                    <p className='item_container_price_vnd_left--p2'>{nf.format(android.pricesale)}</p>
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
                    })}
                </div>
                <div className='add_cart'>
                        <AddCart2 />
                </div>
                <div className='footer' >
                    <Footer />
                </div>
            </div>
         </CartProvider>
    )
   
   
}
export default Android;