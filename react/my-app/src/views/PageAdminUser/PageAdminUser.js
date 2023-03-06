import React from 'react';
import HeadAdmin  from '../../components/HeadAdmin/HeadAdmin';
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin';
import "./PageAdminUser.scss";

const PageAdminUser = () => {
    return (
        <div>
            <HeadAdmin />
            <div  className='navbar_content'>
                <NavbarAdmin />
                <div className='PageAdminUser_navbar_container'>
                    <h1>DANH SÁCH TÀI KHOẢN</h1>
                    <div className='PageAdminUser_navbar_container_content'>
                        <div className='PageAdminUser_navbar_container_content_title'>
                            <table className='table'>
                                    <tr className='tr' style={{color: "red"}}>
                                        <th>USER</th>
                                        <th>PASSWORD</th>
                                        <th>EMAIL</th>
                                        <th>SỐ ĐIỆN THOẠI</th>
                                        <th>ĐỊA CHỈ</th>
                                        <th>XÓA</th>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>user1</td>
                                        <td className='td'>123456</td>
                                        <td className='td'>abc@gmail.com</td>
                                        <td className='td'>+084123456</td>
                                        <td className='td'>84/15 Bình Long, Bình Tân, HCM</td>
                                        <td className='td'>
                                            <button>xóa</button>
                                        </td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>user1</td>
                                        <td className='td'>123456</td>
                                        <td className='td'>abc@gmail.com</td>
                                        <td className='td'>+084123456</td>
                                        <td className='td'>84/15 Bình Long, Bình Tân, HCM</td>
                                        <td className='td'>
                                            <button>xóa</button>
                                        </td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'>user1</td>
                                        <td className='td'>123456</td>
                                        <td className='td'>abc@gmail.com</td>
                                        <td className='td'>+084123456</td>
                                        <td className='td'>84/15 Bình Long, Bình Tân, HCM</td>
                                        <td className='td'>
                                            <button>xóa</button>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageAdminUser;