import React from 'react';
import { DataIos } from '../../services/DataIos';
import { CartProvider } from "react-use-cart";
import "typeface-roboto";
import 'react-toastify/dist/ReactToastify.css';
import "../PageAndroid/Android.scss";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import ProductItem from '../../components/ProductItem/ProductItem.js';
import AddCart from '../../components/AddCart/AddCart.js';
import AddCart2 from '../../components/AddCart/AddCart2';

function PageIos() { 
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
                            <h2>IOSS</h2>
                        </div>
                    </div>
                </div>
                <div className='product_item'>
                    {DataIos.data.map((ios, index) => {
                        return (
                            <ProductItem 
                                key={ios.id}
                                picture={ios.img}
                                name={ios.title}
                                sale={nf.format(ios.priceSale)}
                                money={ios.price}
                                item={ios}
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
export default PageIos;