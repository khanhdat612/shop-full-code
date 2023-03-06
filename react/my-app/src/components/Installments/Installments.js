import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import "typeface-roboto";
import "./Installments.scss";
import spbanchay1 from "../../images/close.png";
import closeForm from "../../images/close.png";


function Installment() { 

  
     let history=useNavigate();

  const [ data, setData ]=useState({
    name: "",
    phone: "",
    address: "",
    number: ""
  })
  const handleChange=(e) => { 
  setData({ ...data, [ e.target.name ]: e.target.value });
  }

  const handleSubMit=(event) => {
   event.preventDefault();
 const  sendData2 ={
     Uname: data.name,
     Uphone: data.phone,
     Uaddress: data.address,
     Unumber: data.number,
   }
        axios.post('http://localhost/newCode/API_ORDER/info.php', sendData2)
          .then((result) => {
            if (result.data.Status=='Invalid')
              {
            }
            else {
              history('/OrderSuccess')
            } 
        })
  }
    return (
         <form onSubmit={handleSubMit}>
            <div className='Installments'>
                    <div className='Installments_title'>
                         <h1>NHẬP THÔNG TIN MUA HÀNG</h1>
                     </div>
                    <div className='Installments_input_name'>
                        <p>Họ và tên người mua</p>
                        <input onChange={handleChange} value={data.name} type='text' name="name" required="required"/> 
                    </div>
                    <div className='Installments_input_name'>
                        <p>Số điện thoại người nhận</p>
                        <input onChange={handleChange} value={data.phone} type='text' name="phone" required="required"/> 
                    </div>
                    <div className='Installments_input_name'>
                        <p>Địa chỉ nhận hàng</p>
                        <input onChange={handleChange} value={data.address} type='text' name="address" required="required"/> 
                    </div>
                    <div className='Installments_input_name'>
                        <p>Số căn cước công dân</p>
                        <input onChange={handleChange} value={data.number} type='text' name="number" required="required"/> 
                    </div>
                  <div className='Installments_order'>
                       <button  className='Installments_order--btn'>ĐẶT HÀNG</button>
                    </div>
                </div>
              </form>
    )

}

export default Installment;