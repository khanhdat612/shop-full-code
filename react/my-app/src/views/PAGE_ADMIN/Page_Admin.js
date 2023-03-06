import React from 'react';
import { Link } from 'react-router-dom';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./Page_Admin.scss";
import "./PageAdmin.scss";

const Page_Admin = () => {
    return (
        <div>
            <div className='header_admin'>
                <HeadAdmin />
            </div>
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdmin_navbar_container'>
                    <div className='PageAdmin_navbar_container--title'>
                        <h1>DANH SÁCH SẢN PHẨM</h1>
                    </div>
                    <div className='PageAdmin_navbar_container_content'>
                        <div className='PageAdmin_navbar_container_content_product '>
                            <div className='PageAdmin_navbar_container_content_product_android'>
                                <h3>DANH SÁCH SẢN PHẨM ANDROID</h3>
                                <Link to="/product_Android">
                                    <button>Xem</button>
                                </Link>
                            </div>
                            <div className='PageAdmin_navbar_container_content_product_ios'>
                                <h3>DANH SÁCH SẢN PHẨM IOS</h3>
                                 <Link to="/product_Ios">
                                    <button>Xem</button>
                                </Link>

                            </div>
                            <div className='PageAdmin_navbar_container_content_product_accessory'>
                                <h3>DANH SÁCH SẢN PHẨM PHỤ KIỆN</h3>
                                 <Link to="/product_Accessory">
                                    <button>Xem</button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Page_Admin;