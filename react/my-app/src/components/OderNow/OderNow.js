import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "typeface-roboto";
import "./OderNow.scss";
import spbanchay1 from "../../images/close.png";



const OderNow=() => {
    
    return (
        <div className='Installments OderNow_Installments'>
            <div className='Installments_input_name'>
                <p>Họ và tên người mua</p>
                <input required="required" type='text'/>
            </div>
            <div className='Installments_input_name'>
                <p>Số điện thoại</p>
                <input required="required" type='number'/>
            </div>
            <div className='Installments_input_name'>
                <p>Số CMND</p>
                <input required="required" type='number'/>
            </div>
            <div className='Installments_input_name'>
                <p>Email</p>
                <input required="required" type='text'/>
            </div>
            <div className='Installments_input_name'>
                <p>Địa chỉ</p>
                <input required="required" type='text'/>
            </div>
            <div className='Installments_order'>
                <Link to="/orderInstallments" className='Installments_order--btn'>ĐẶT HÀNG</Link>
            </div>
            <div  className='close'>
            </div>
        </div>
    );
};

export default OderNow;