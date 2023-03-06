import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdmin.scss";

const PageAdmin2 = () => {
    return (
        <div>
            <div className='pageAdmin2'>
                <HeadAdmin />
            </div>
            <div className='navbar_content'>
                <NavbarAdmin />
             <div className='PageAdmin_navbar_container'>
                    <h1>XEM DANH SÁCH SẢN PHẨM</h1>
                        <div className='PageAdmin_navbar_container_content PageAdmin_navbar_container_content_2 PageAdmin_navbar_container_content_2--1'>
                        <div className='PageAdmin_navbar_container_content_title PageAdmin_navbar_container_content_title_2'>
                            <Link to="/product_android">
                                <button className='hover_product' style={{cursor:"pointer"}}>Sản Phẩm Android</button>              
                            </Link>
                            <Link to="/product_ios">
                                <button className='hover_product' style={{cursor:"pointer"}}>Sản Phẩm ios</button>              
                            </Link>
                            <Link to="/product_accessory">
                                <button className='hover_product' style={{cursor:"pointer"}}>Phụ Kiện Sản Phẩm</button>              
                            </Link>
                        </div>
                        </div>
              </div>
            </div>
            
        </div>
    );
};

export default PageAdmin2;