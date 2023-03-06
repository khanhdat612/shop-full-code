import React from 'react';
import "typeface-roboto";
import "./NavbarAdmin.scss";
import { Routes, Route, Link } from 'react-router-dom';


const NavbarAdmin = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar_list'>
                    <ul style={{display:"block"}}>
                        <Link to="/listProduct">
                            <li className='hover_navbar'>Danh sách sản phẩm</li>
                        </Link>
                        <Link to="/listUser2">
                            <li className='hover_navbar'>Danh sách user</li>
                        </Link>
                        <Link to="/listOrders">
                            <li className='hover_navbar'>Đơn hàng</li>
                        </Link>
                        <Link to="/orderStatus">
                            <li className='hover_navbar'>Trạng thái đơn</li>
                        </Link>
                        <Link to="/MoneyProduct">
                            <li className='hover_navbar'>Doanh thu</li>
                        </Link>
                        <Link to="/logOut">
                            <li className='hover_navbar'>Đăng xuất</li>
                        </Link>
                    </ul>
                </div>
             
            </div>
        </div>
    );
};

export default NavbarAdmin;