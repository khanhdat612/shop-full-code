import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminUser.scss";
import "./PageAdminAccessrosy.scss";

const PageAdminUser2=() => {

   const [ product, setProduct ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/API_ADMIN_USER/API_Admin_User.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct(result);
                        }
                    )
                }, []);
  
  
      const deleteProduct = (id) => {
    axios.delete('http://localhost/newCode/API_ADMIN/API_DELETE_USER/delete.php', { data: { id: id } })
      .then((result) => { 
        product();
      }).catch(() => {
        alert("Đã Xóa Tài Khoản!");
                    window.location.reload(true);

      })
  }
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdmin_navbar_container'>
                    <h1>DANH SÁCH TÀI KHOẢN</h1>
                        <div className='PageAdmin_navbar_container_content'>
                            <div className='PageAdmin_navbar_container_content_title'>
                <table className='table table-1'>
                            <tr className='tr' style={{color: "red"}}>
                                <th className='td-01'>MÃ SỐ</th>
                                <th className='td-02'>USERNAME</th>
                                <th className='td-03'>PASSWORD</th>
                                <th className='td-04'>SỐ ĐIỆN THOẠI</th>
                                <th className='td-05'>ĐỊA CHỈ</th>
                                <th className='td-06'>XÓA</th>
                                
                            </tr>
                </table>
                {product.map((item, index) => {
                  return (
                          <table className='table table-1' key={index}>
                            <tr className='tr'>
                                <td className='td td-01'>{ item.id }</td>
                                <td className='td td-02'>{ item.username}</td>
                                <td className='td td-03'>{ item.password}</td>
                                <td className='td td-04'>{ item.telephone}</td>
                              <td className='td td-05'>{item.address}</td>
                               <td style={{ display: "flex" }}>
                          <Link className='Delete' to="" onClick={() => deleteProduct(item.id)}>
                        XÓA
                          </Link>
                        </td>
                            </tr>
                          </table>
                  )
                })}
              </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminUser2;