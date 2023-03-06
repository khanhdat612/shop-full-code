import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminStatus.scss";

const PageAdminStatus=() => {
    
    const [ product, setProduct ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/API_STATUS_ORDER/info.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct(result);
                        }
                    )
                }, []);
    const [ product2, setProduct2 ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/API_ADMIN/API_STATUS_ORDER/Status.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct2(result);
                        }
                    )
                }, []);
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdminStatus_navbar_container'>
                    <h1>TRẠNG THÁI ĐƠN HÀNG</h1>
                    <div className='PageAdminStatus_navbar_container_content'>
                        <div className='PageAdminStatus_navbar_container_content_title'>
                            <table className='table table-1'>
                            <tr className='tr' style={{color: "red"}}>
                                <th style={{width:"10%"}}>MÃ ĐƠN</th>
                                <th style={{width:"30%"}}>TÊN NGƯỜI NHẬN</th>
                                <th style={{width:"30%"}}>SỐ ĐIỆN THOẠI</th>
                                <th style={{width:"30%"}}>TRẠNG THÁI ĐƠN HÀNG</th>
                            </tr>
                            </table>
                            <div className='total_table'>
                                    {product.map((item, index) => {
                                        return (
                                            <div className='table_info'>
                                                <table className='table table-1'key={index}>
                                                    <tr className='tr'>
                                                        <th style={{width:"10%"}}>{ item.id }</th>
                                                        <th style={{width:"30%"}}>{ item.name}</th>
                                                        <th style={{width:"30%"}}>{item.phone}</th>
                                                            {product2.map((item, index) => {
                                                                return (
                                                                        <th>{ item.orderStatus1}</th>
                                                            )
                                                            })}
                                                    </tr>
                                                </table>
                                            </div>
                                    )
                                    })}
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminStatus;