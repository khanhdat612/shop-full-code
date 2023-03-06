import React from 'react';
import { DataAndroind } from '../../services/DataAndroind.js';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import 'react-toastify/dist/ReactToastify.css';
import "../PageAndroid/Android.scss";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import ProductItemAndroid from '../../components/ProductItemAndroid/ProductItemAndroid.js';
// import AddCart from '../../components/AddCart/AddCart.js';
// import AddCart2 from '../../components/AddCart/AddCart2';

function PageAndroid() { 
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
                            <h2>ANDROID-2</h2>
                        </div>
                    </div>
                </div>
                <div className='product_item'>
                    {DataAndroind.data.map((android, index) => {
                        return (
                            <ProductItemAndroid 
                                key={android.id}
                                picture={android.img}
                                name={android.title}
                                sale={nf.format(android.priceSale)}
                                money={android.price}
                                item={android}
                            />
                        )
                    })}
                </div>
                {/* <div className='add_cart'>
                        <AddCart2 />
                </div> */}
                <div className='footer' >
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
   
}
export default PageAndroid;