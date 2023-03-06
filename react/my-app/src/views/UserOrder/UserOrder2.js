import React from 'react';
import { useState, useEffect } from 'react';
import { useCart } from "react-use-cart";
import 'react-toastify/dist/ReactToastify.css';
import "./UserOrder.scss";
import "../ProductDetail/ProductDetail.scss";
// import "../PageAdminUser/PageAdminAccessrosy.scss";


const  UserOrder2=() => {

 const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart
    }=useCart();

    // total price    
const getTotalCartValue = (items = []) => { 
  if (!items.length) return 0;
  const total = items
    .map((item) => item.priceSale * item.quantity)
    .reduce((total, n) => total + n);
  return total;
    };
    const totalPrice=getTotalCartValue(items);
    
    //////-----
    const { cartTotal }=useCart()
    const [ item, setItem ]=useState([]);
    useEffect(() => {
        fetch("http://localhost/newCode/API_USER/API_User.php")
        .then(res => res.json())
        .then(
            (result) => { 
                setItem(result);
            }
        )
    }, []);

    const [ status, setStatus ]=useState([]);
    useEffect(() => {
        fetch("http://localhost/newCode/API_STATUS/API_Status.php")
        .then(res => res.json())
        .then(
            (result) => { 
                setStatus(result);
            }
        )
    }, []);

 var nf = new Intl.NumberFormat();
    return (
        <div>
            <div className='product product_1'>
                <div className='product_product '>
                    <div className='product_info_title'>
                            <h2>THÔNG TIN ĐƠN HÀNG</h2>
                    </div>
                    <div className='addCart_content product_items' style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                                    {items.map((item, index) => {
                                        return (
                                            <div key={index}  className="">
                                                <table className='tableProduct' style={{width:"900px"}}>
                                                     <tr className='table_name' style={{height:"30px", backgroundColor:"#caff78"}}>
                                                        <th className='table_name_id' style={{ width:"70%"}}>Tên Sản Phẩm</th>
                                                        <th className='table_name_name' style={{ width:"10%"}}>Số Lượng</th>
                                                        <th className='table_name_phone' style={{ width:"20%"}}>Thành Tiền</th>
                                                    </tr>
                                                    <tr>
                                                        <td style={{border:"solid 1px black"}}>
                                                            {item.title}
                                                        </td>
                                                        <td style={{border:"solid 1px black"}}>
                                                            {item.quantity}
                                                        </td>
                                                        <td style={{border:"solid 1px black"}}>
                                                            {nf.format(item.priceSale)} VNĐ
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        );
                                    })}
                    </div>
                    <div className='span_margin total_price product_info_list_name'>
                        <div>
                            <span>Tổng Thu: </span>
                        </div>
                        <div style={{color:"red", marginLeft:"10px"}}>
                            {nf.format(totalPrice)} VNĐ
                        </div>
                        </div>
                    <div className=' product_info_list' style={{fontSize:"20px" ,textAlign:"center"}}>
                         {status.map(status => (
                             <div className='span_margin product_info_list_name'>
                                 <div style={{display:"flex", justifyContent:"center"}}>
                                     <span>Trạng thái đơn hàng:</span>
                                     <div style={{color:"red", marginLeft:"10px"}}>
                                        {status.orderStatus1}
                                     </div>
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='product product_2'>
                <div className='product_info'>
                        <div className='product_info_title'>
                            <h2>THÔNG TIN NHẬN HÀNG</h2>
                        </div>
                    <div className=' product_info_list'>
                        {item.map(item => (
                            <div className='container_user_order'> 
                                <table className='table' style={{border:"none"}}>
                                    <tr className='table_name' style={{ backgroundColor:"#caff78"}}>
                                        <th  className='table_name_id'style={{width:"10%"}}>Mã Đơn</th>
                                        <th  className='table_name_name' style={{width:"15%"}}>Tên Người Nhận</th>
                                        <th  className='table_name_phone' style={{width:"10%"}}>Số Điện Thoại</th>
                                        <th  className='table_name_address' style={{width:"50%"}}>Địa Chỉ Giao</th>
                                        <th  className='table_name_number' style={{width:"10%"}}>Số Căn Cước</th>
                                    </tr>
                                    <tr className='table_value' style={{textAlign:"center"}}>
                                        <td style={{border:"solid 1px black"}}>
                                            {item.id}
                                        </td>
                                        <td style={{border:"solid 1px black"}}>
                                            { item.name}
                                        </td>
                                        <td style={{border:"solid 1px black"}}>
                                            { item.phone}
                                        </td>
                                        <td style={{border:"solid 1px black"}}>
                                            { item.address}
                                        </td>
                                        <td style={{border:"solid 1px black"}}>
                                            { item.number}
                                        </td>
                                    </tr>
                                </table>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default UserOrder2;