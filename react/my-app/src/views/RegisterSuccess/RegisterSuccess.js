import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../../components/Head/Header';
import Footer from '../../components/Footer/Footer';
import "./RegisterSuccess.scss";
import Success from "../../images/success.png";


const RegisterSuccess = () => {
    return (
        <div>
            {/* <div className='orderSuccess_header'>
                <Header />
            </div> */}
            <div className='container_content container_content_2'>
                <div className='containerSS'>
                    <div className='containerSS_img'>
                         <img src={Success}   alt="errol" />
                    </div>
                    <div className='containerSS_title'>
                        <h4 className=''>Đặt Ký Thành Công</h4>
                    </div>
                    {/* <div className='containerSS_content'>
                        <span>Nhân viên cửa hàng sẽ liên hệ vào số điện thoại của bạn sớm nhất !</span>
                    </div> */}
                    <div className='containerSS_btn'>
                        <Link to="/login">
                            <button>Đăng Nhập</button>
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

export default RegisterSuccess;