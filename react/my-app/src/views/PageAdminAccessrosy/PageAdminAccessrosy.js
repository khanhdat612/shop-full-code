import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminAccessrosy.scss";

const PageAdminAccessrosy=() => {

     let history=useNavigate();

  
  
  const [ data, setData ]=useState({
    productName: "",
    productPrice: "",
    productPriceSale: "",
    productQuantity: "",
    // productAccessory: ""
  })
  const handleChange=(e) => { 
      setData({ ...data, [ e.target.name ]: e.target.value });
  }

  const handleSubMit=(event) => {
   
    event.preventDefault();
 const  sendData2 ={
   valueName: data.productName,
   valuePrice: data.productPrice,
   valuePriceSale: data.productPriceSale,
   valueQuantity: data.productQuantity,
  //  valuePriceAccessory: data.productAccessory,
   }

        axios.post('http://localhost/newCode/ACCESSORY/Add_product_ACCESSORY/Add_product.php', sendData2)
          .then((result) => {
            if (result.data.Status=='Invalid')
              {
            }
            else {
              history('/product_accessory')
            } 
        })
  }

  // 
   const [ product, setProduct ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/ACCESSORY/API_DATA_ACCESSORY/API_ACCESSORY.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct(result);
                        }
                    )
                }, []);
  
   const [ product2, setProduct2 ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/ACCESSORY/API_DATA_ADDPRODUCT_ACCESSORY/API_Data_AddProduct_ACCESSORY.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct2(result);
                        }
                    )
                }, []);
  const deleteProduct = (id) => {
    axios.delete('http://localhost/newCode/ACCESSORY/DELETE_PRODUCT_ADD/Delete.php', { data: { id: id } })
      .then((result) => { 
        // alert("Error deleting product");
        product2();
      }).catch(() => {
        alert("Sản Phẩm Đã Được Xóa!");
                    window.location.reload(true);

      })
  }
  
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdmin_navbar_container'>
                    <h1>DANH SÁCH SẢN PHẨM</h1>
                        <div className='PageAdmin_navbar_container_content'>
                            <div className='PageAdmin_navbar_container_content_title'>
                <table className='table table-1'>
                            <tr className='tr' style={{color: "red"}}>
                                <th className='td-1'>TÊN SẢN PHẨM</th>
                                <th>GIÁ GỐC</th>
                                <th>GIÁ BÁN</th>
                             
                            </tr>
                </table>
                {product.map((item, index) => {
                  return (
                          <table className='table table-1' key={index}>
                            <tr className='tr'>
                                <td className='td td-1'>{ item.name }</td>
                                <td className='td td-2'>{ item.price}</td>
                                <td className='td td-2'>{ item.pricesale}</td>
                            </tr>
                          </table>
                  )
                })}
              </div>
                <div className='PageAdmin_navbar_container'>
                    <h1>SẢN PHẨM ĐÃ THÊM</h1>
                        <div className='PageAdmin_navbar_container_content PageAdmin_navbar_container_content_2'>
                            <div className='PageAdmin_navbar_container_content_title'>
                <table className='table table-1 table-2'>
                            <tr className='tr' style={{color: "red"}}>
                                <th className='td-1'>TÊN SẢN PHẨM</th>
                                <th className='td-2'>GIÁ GỐC</th>
                                <th className='td-2'>GIÁ BÁN</th>
                                <th className='td-2'>SỐ LƯỢNG</th>
                                <th className='td-2'>XÓA SP</th>
                            </tr>
                </table>
                {product2.map((item, index) => {
                  return (
                          <table className='table table-1 table-2' key={index}>
                            <tr className='tr'>
                                <td className='td td-1'>{ item.name }</td>
                                <td className='td td-2'>{ item.price}</td>
                                <td className='td td-2'>{item.pricesale}</td>
                        <td className='td td-2'>{item.quantity}</td>
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
              
              
                               <div className='add_product_new'>
                <h2>THÊM SẢN PHẨM MỚI</h2>
                                </div>
                                <form onSubmit={handleSubMit}>
                                    <div className='background_center_form_input'>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productName} type="text" name='productName' required="required" />
                                        <span className='background_center_form_input1--span'>Tên san phẩm</span>
                                      </div>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productPrice} type="text" name='productPrice'  required="required"/>
                                        <span className='background_center_form_input1--span'>Giá gốc</span>
                                      </div>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productPriceSale} type="text" name='productPriceSale'  required="required"/>
                                        <span className='background_center_form_input1--span'>Giá bán</span>
                                      </div>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productQuantity} type="text" name='productQuantity'  required="required"/>
                                        <span className='background_center_form_input1--span'>Số lượng</span>
                                      </div>
                                      {/* <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productAccessory} type="text" name='productAccessory'  required="required"/>
                                        <span className='background_center_form_input1--span'>Phân loại</span>
                                      </div> */}
                                    </div>
                                     <div className='button_login'>
                                <button className='btn-admin' onClick={() => {
                    alert("Đã thêm sản phẩm thành công")
                    window.location.reload(true);
                                      }} >THÊM</button>
                                    </div>
                                </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminAccessrosy;