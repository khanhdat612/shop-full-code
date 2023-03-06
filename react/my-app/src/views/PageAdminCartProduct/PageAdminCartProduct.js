import React from 'react';
import { CartProvider } from "react-use-cart";
import "../PageAdminUser/PageAdminUser.scss";
import "../PageAdminAccessrosy/PageAdminAccessrosy.scss";
import "../PageAdminStatus/PageAdminStatus.scss";
import PageTotal from '../PageAdminMoney/PageAdminMoney.js';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';

const PageAdminCartProduct=() => {

    return (
            <CartProvider>
            <div>
                <HeadAdmin />
                <div className='navbar_content'>
                    <NavbarAdmin />
                    <div className='PageAdminStatus_navbar_container'>
                        
                            <PageTotal />
                        </div>
                    </div>
                    
                </div>
            </CartProvider>
    );
};

export default PageAdminCartProduct;