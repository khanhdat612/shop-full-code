import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../../components/Head/Header';
import Footer from '../../components/Footer/Footer';
import "./OrderSuccess.scss";
import Success from "../../images/success.png";


const OrderSuccess=() => {
    return (
        <div>
            <div className='orderSuccess_header'>
                <Header />
            </div>
            <div className='container_content'>
                <div className='containerSS'>
                    <div className='containerSS_img'>
                         <img src={Success}   alt="errol" />
                    </div>
                    <div className='containerSS_title'>
                        <h4 className=''>Đặt Hàng Thành Công</h4>
                    </div>
                    <div className='containerSS_content'>
                        <span>Nhân viên cửa hàng sẽ liên hệ vào số điện thoại của bạn sớm nhất !</span>
                    </div>
                    <div className='containerSS_btn'>
                        <Link to="/CheckInfo">
                            <button>Hoàn Tất</button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='orderSuccess_footer'>
                <Footer />
            </div>
            
        </div>
    );
};

export default OrderSuccess;