import React from 'react';
import { useState } from 'react';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import AddCart from '../../components/AddCart/AddCart.js';
import OderNow from '../../components/OderNow/OderNow.js';
import Installments from '../../components/Installments/Installments.js';
import closeForm from "../../images/close.png";

function PageCart() { 

        // MUA NGAY
    const [ isActive, setIsActive ]=useState(false);
     function handleOrder() {
         setIsActive(isActive => !isActive);
    }

    // TRẢ GÓP
    const [ Active, setActive]=useState(false);
    function handleClick() {
        setActive(Active => !Active);
    }
    
    return (
        <CartProvider>
            <div className='container_pageandroid'>
                <div className='header'>
                    <Header />
                </div>
                <div className='add_cart'>
                    <AddCart />
                </div>
                
                <div className='footer' >
                    <Footer />
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
            </div>
        </CartProvider>
    )
   
}
export default PageCart;