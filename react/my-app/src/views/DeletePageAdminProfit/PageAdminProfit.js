import React from 'react';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminProfit.scss";

const PageAdminProfit = () => {
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdminProfit_navbar_container'>
                    <h1>DOANH THU</h1>
                    <div className='PageAdminProfit_navbar_container_content'>
                        <div className='PageAdminProfit_navbar_container_content_title'>
                            <table>
                                    <tr style={{color: "red"}}>
                                        <th>TÊN SẢN PHẨM</th>
                                        <th>GIÁ</th>
                                        <th>SỐ LƯỢNG</th>
                                    </tr>
                                    <tr>
                                        <td>sp 1</td>
                                        <td>123456</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>sp 1</td>
                                        <td>123456</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>sp 1</td>
                                        <td>123456</td>
                                        <td>1</td>
                                    </tr>
                            </table>
                        </div>
                        <div className='PageAdminProfit_navbar_container_content_price'>
                            <div className='PageAdminProfit_navbar_container_content_price_money'>
                                <p>Tổng tiền</p>
                                <p>Tổng số lượng</p>
                            </div>
                            <div className='PageAdminProfit_navbar_container_content_price_quantity'>
                               <p>130.000.000</p>
                               <p>130</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminProfit;