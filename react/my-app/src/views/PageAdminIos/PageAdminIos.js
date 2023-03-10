import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminIos.scss";

const PageAdminIos=() => {

     let history=useNavigate();

  
  
  const [ data, setData ]=useState({
    productName: "",
    productPrice: "",
    productPriceSale: "",
    productQuantity: "",
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
   }

        axios.post('http://localhost/newCode/IOS/Add_product_IOS/Add_product.php', sendData2)
          .then((result) => {
            if (result.data.Status=='Invalid')
              {
            }
            else {
              history('/product_ios')
            } 
        })
  }

  // 
   const [ product, setProduct ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/IOS/API_DATA_IOS/API_Ios.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct(result);
                        }
                    )
                }, []);
  
   const [ product2, setProduct2 ]=useState([]);
                useEffect(() => {
                    fetch("http://localhost/newCode/IOS/API_DATA_ADDPRODUCT_IOS/API_Data_AddProduct_IOS.php")
                    .then(res => res.json())
                    .then(
                        (result) => { 
                            setProduct2(result);
                        }
                    )
                }, []);
   const deleteProduct = (id) => {
    axios.delete('http://localhost/newCode/IOS/DELETE_PRODUCT_ADD/Delete.php', { data: { id: id } })
      .then((result) => { 
        // alert("Error deleting product");
        product2();
      }).catch(() => {
        alert("S???n Ph???m ???? ???????c X??a!");
                    window.location.reload(true);

      })
  }
  
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdmin_navbar_container'>
                    <h1>DANH S??CH S???N PH???M IOS</h1>
                        <div className='PageAdmin_navbar_container_content'>
                            <div className='PageAdmin_navbar_container_content_title'>
                <table className='table table-1'>
                            <tr className='tr' style={{color: "red"}}>
                                <th className='td-1'>T??N S???N PH???M</th>
                                <th>GI?? G???C</th>
                                <th>GI?? B??N</th>
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
                    <h1>S???N PH???M ???? TH??M</h1>
                        <div className='PageAdmin_navbar_container_content PageAdmin_navbar_container_content_2'>
                            <div className='PageAdmin_navbar_container_content_title'>
                <table className='table table-1 table-2'>
                            <tr className='tr' style={{color: "red"}}>
                                <th className='td-1'>T??N S???N PH???M</th>
                                <th className='td-2'>GI?? G???C</th>
                                <th className='td-2'>GI?? B??N</th>
                                <th className='td-2'>S??? L?????NG</th>
                                <th className='td-2'>X??A SP</th>
                            </tr>
                </table>
                {product2.map((item, index) => {
                  return (
                          <table className='table table-1 table-2' key={index}>
                            <tr className='tr'>
                                <td className='td td-1'>{ item.name }</td>
                                <td className='td td-2'>{ item.price}</td>
                                <td className='td td-2'>{ item.pricesale}</td>
                                <td className='td td-2'>{ item.quantity}</td>
                                <td style={{ display: "flex" }}>
                          <Link className='Delete' to="" onClick={() => deleteProduct(item.id)}>
                        X??A
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
                <h2>TH??M S???N PH???M M???I</h2>
                                </div>
                                <form onSubmit={handleSubMit}>
                                    <div className='background_center_form_input'>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productName} type="text" name='productName' required="required" />
                                        <span className='background_center_form_input1--span'>T??n san ph???m</span>
                                      </div>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productPrice} type="text" name='productPrice'  required="required"/>
                                        <span className='background_center_form_input1--span'>Gi?? g???c</span>
                                      </div>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productPriceSale} type="text" name='productPriceSale'  required="required"/>
                                        <span className='background_center_form_input1--span'>Gi?? b??n</span>
                                      </div>
                                      <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productQuantity} type="text" name='productQuantity'  required="required"/>
                                        <span className='background_center_form_input1--span'>S??? l?????ng</span>
                                      </div>
                                      {/* <div className='background_center_form_input1'>
                                        <input onChange={handleChange} value={data.productAccessory} type="text" name='productAccessory'  required="required"/>
                                        <span className='background_center_form_input1--span'>Ph??n lo???i</span>
                                      </div> */}
                                    </div>
                                    <div className='button_login'>
                                <button className='btn-admin' onClick={() => {
                    alert("???? th??m s???n ph???m th??nh c??ng")
                    window.location.reload(true);
                                      }} >TH??M</button>
                                    </div>
                                </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminIos;