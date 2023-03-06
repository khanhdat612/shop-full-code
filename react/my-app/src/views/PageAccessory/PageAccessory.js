import React from 'react';
import { DataAccessory, DataAndroind } from '../../services/DataAccessory';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import "../PageAccessory/PageAccessory.scss";
import "../PageAndroid/Android.scss";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import ProductItemAccessory from '../../components/ProductItemAccessory/ProductItemAccessory.js';
import AddCart from '../../components/AddCart/AddCart.js';



const PageAccessory=() => {
     var nf = new Intl.NumberFormat();
    
    return (
        <CartProvider>
            <div className='accessory'>
                <div className='header'>
                    <Header />
                </div>

                <div className='android'>
                    <div className='container'>
                        <div className='container_android'>
                            <h2>PHỤ KIỆN</h2>
                        </div>
                    </div>
                </div>
                <div className='product_item'>
                    {DataAccessory.data.map((item, index) => {
                        return (
                            <ProductItemAccessory
                                key={item.id}
                                picture={item.img}
                                name={item.title}
                                sale={nf.format(item.priceSale)}
                                money={item.price}
                                item={item}
                            />
                        )
                    })}
                </div>
                {/* <div className='add_cart'>
                    <AddCart />
                </div> */}
                <div className='footer'>
                <Footer />
                </div>
            </div>
        </CartProvider>
    );
};

export default PageAccessory;