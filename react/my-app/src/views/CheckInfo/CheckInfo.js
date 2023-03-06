import React from 'react';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import UserOrder2 from '../UserOrder/UserOrder2.js';
import Header from "../../components/Head/Header.js";
import Footer from '../../components/Footer/Footer.js';

function CheckInfo () {
    return (
       <CartProvider>
            <div className='container_pageAndroid'>
                <div className='header'>
                    <Header />
                </div>
                <div className='add_cart'>
                    <UserOrder2 />
                </div>
                <div  className='footer' >
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
}

export default CheckInfo;