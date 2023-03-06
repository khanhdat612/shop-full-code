import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminEditProduct=() => {
        const navigate = useNavigate();
        const [inputs, setInputs] = useState([]);
        const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/newCode/ANDROID/Add_product_ANDROID/Add_product.php/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }


      const handleChange=(e) => { 
      setData({ ...data, [ e.target.name ]: e.target.value });
    }

    //  const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs).then(function(response){
    //         console.log(response.data);
    //         navigate('/');
    //     });
        
    // }


    const handleSubMit=(event) => {
        event.preventDefault();
    const  sendData2 ={
   valueName: data.productName,
   valuePrice: data.productPrice,
   valuePriceSale: data.productPriceSale,
   valueQuantity: data.productQuantity,
        }
        axios.put('http://localhost/newCode/ANDROID/Add_product_ANDROID/Add_product.php', sendData2)
        // axios.post('http://localhost:3000/product_android/item/3/edit', sendData2)
          .then((result) => {
            if (result.data.Status=='Invalid')
              {
            }
            else {
              history('/product_android')
            } 
        })
    }

        const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:8888/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    
    return (
        <div>
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
                                    </div>
                                    <div className='button_login'>
                                <button className='btn-admin' onClick={() => {
                                  alert("Đã thêm sản phẩm thành công")
                                      }} >Sửa</button>
                                    </div>
                                </form>
        </div>
    );
};

export default AdminEditProduct;