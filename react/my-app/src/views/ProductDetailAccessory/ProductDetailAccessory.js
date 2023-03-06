import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "typeface-roboto";
import { DataIosSimilar } from '../../services/DataIosSimilar.js';
import "../ProductDetailAccessory/ProductDetailAccessory.scss";
import Slider from 'react-slick';
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Productitem from '../../components/ProductItem/ProductItem.js';
import OderNow from '../../components/OderNow/OderNow.js';
import Installments from '../../components/Installments/Installments.js';
import spbanchay1 from "../../images/accessory.png";
import closeForm from "../../images/close.png";






const ProductDetailAccessory=() => {
                const slick_product={
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots:false,
                    autoplay: true,
                    speed:2000,
        
    };
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

    // SPAN COLOR
    const [ color, setColor ]=useState(false);
    function toggleColor() {
                setColor(color => !color);
            }
   
    

    
    return (
        <div className='container_detail'>
            <div className='header'>
                <Header />
            </div>
            <div className='navbar'>
                <ul className='navbar_ul'>
                    <li>Trang chủ </li>
                    <li>></li>
                    <li>Phụ kiện</li>
                    <li>></li>
                    <li>Tai Nghe</li>
                    <li>></li>
                    <li>Tai Nghe bluetooth</li>
                </ul>
            </div>
            <div className='product'>
                <div className='product_name'>
                    <h1>Tai Nghe bluetooth - CHÍNH HÃNG HÀNG VN/A</h1>
                </div>
                <div className='product_banner'>
                    <Slider Slider className='banner_slider' {...slick_product}>
                        <img src={spbanchay1}  alt="errol" />
                        <img src={spbanchay1}  alt="errol" />
                        <img src={spbanchay1}  alt="errol" />
                    </Slider>
                </div>
                <div className='product_pay'>
                    <div className='product_version'>
                        <div className='product_version_title'>
                            <h2> Chọn phiên bản </h2>
                        </div>
                        <div className='product_version_GB'>
                                <span className='span1' onClick={toggleColor} className={color ? "activecolor" : null }>V001</span>
                                <span  className='product_version_GB--span span1'>V002</span>
                                <span className='span1'>V003</span>
                        </div>
                    </div>
                    <div className='product_order'>
                        <div onClick={handleOrder}  className='product_order_now'>
                            <p >MUA NGAY</p>
                            <span>GIẢM NGAY 1 TRIỆU</span>
                        </div>
                        {/* <div onClick={handleClick}  className='product_order_installments'>
                            <p>TRẢ GÓP</p>
                            <span>LÃI SUẤT 0%</span>
                        </div> */}
                    </div>
                    <div className='product_color'>
                        <div className='product_color_title'>
                            <h2> Chọn màu sắc </h2>
                        </div>
                        <div className='product_color_total_item'>
                            <div className='product_color_items'>
                                    <span >Red</span>
                                    <span className='product_color_items--item'>Puprple</span>
                            </div>
                             <div className='product_color_items'>
                                    <span>Starlight</span>
                                    <span className='product_color_items--item'>Midnight</span>
                                    <span>Blue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detail_product'>
                <div className='detail_product_line'></div>
                <p className='detail_product_line--title'>CHI TIẾT SẢN PHẨM</p>
                <div className='detail_product_line'></div>
            </div>
            <div className='view_product'>
                <div className='view_product_one'>
                    <div className='view_product_one_title'>
                        <h2>Thiết kế sang trọng, âm thanh sống động, chân thật</h2>
                    </div>
                    <div className='view_product_one_description'>
                        <p className=''>
                            Từ dòng iPhone 12 Series, Apple đã mang đến cho iPhone kiểu dáng thiết kế sang trọng từ những góc cạnh vuông vức. Năm nay, dòng iPhone 14 Series có thiết kế không thay đổi quá nhiều. Phần lưng máy phẳng, các cạnh vuông mang phong cách của những chiếc iPhone 5 đời đầu. Máy có trọng lượng chỉ khoảng 172g và độ dày 7.8mm, tạo cảm giác thoải mái khi cầm trên tay sử dụng. iPhone 14 chính hãng VN/A ánh lên vẻ đẹp hiện đại, sang trọng từ mọi góc nhìn.
                        </p>
                    </div>
                    <div className='view_product_one_img'>
                        <img src={spbanchay1}  alt="errol" />
                        <img src={spbanchay1}  alt="errol" />
                        <img src={spbanchay1}  alt="errol" />
                        
                    </div>
                </div>
                <div className='view_product_two'>
                    <div className='view_product_two_title'>
                        <h2>Thiết kế sang trọng, âm thanh sống động, chân thật</h2>
                    </div>
                    <div className='view_product_two_description'>
                        <p className=''>
                            Từ dòng iPhone 12 Series, Apple đã mang đến cho iPhone kiểu dáng thiết kế sang trọng từ những góc cạnh vuông vức. Năm nay, dòng iPhone 14 Series có thiết kế không thay đổi quá nhiều. Phần lưng máy phẳng, các cạnh vuông mang phong cách của những chiếc iPhone 5 đời đầu. Máy có trọng lượng chỉ khoảng 172g và độ dày 7.8mm, tạo cảm giác thoải mái khi cầm trên tay sử dụng. iPhone 14 chính hãng VN/A ánh lên vẻ đẹp hiện đại, sang trọng từ mọi góc nhìn.
                        </p>
                    </div>
                    <div className='view_product_two_img'>
                        <img src={spbanchay1}  alt="errol" />
                        <img src={spbanchay1}  alt="errol" />
                        <img src={spbanchay1}  alt="errol" />
                        
                    </div>
                </div>
            </div>
            <div className='detail_product'>
                <div className='detail_product_line'></div>
                <p className='detail_product_line--title'>SẢN PHẨM NỔI BẬT</p>
                <div className='detail_product_line'></div>
            </div>
            <div className='product_similar'>
                <div className='product_item'>
                    {DataIosSimilar.data.map((item, index) => {
                        
                        return (
                            <Productitem
                                key={item.id}
                                picture={item.img}
                                name={item.title}
                                sale={item.priceSale}
                                money={item.price}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='footer'>
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
    );
};

export default ProductDetailAccessory;