import React from 'react';
import "typeface-roboto";
import "./Footer.scss";
import footer from "../../images/backgroundfooter.png";
import tron from "../../images/tron.png";
import paysam from "../../images/paysam.png";
import paypal from "../../images/paypal.png";
import payvisa from "../../images/payvisa.png";
import doitac1 from "../../images/doitac1.png";
import doitac2 from "../../images/doitac2.png";
import doitac3 from "../../images/doitac3.png";
import doitac4 from "../../images/doitac4.png";

function Footer() {
  return (
      <div className='footer'>
                <div className='footer_img'>
                    <img src={footer} alt="errol" />
                </div>
                <div className='footer_img_content'>
                    <div className='footer_img_content_items margin_item_left'>
                        <h3>ĐỊA CHỈ CỬA HÀNG</h3>
                        <div className='footer_img_content_items_list'>
                            <ul className='footer_img_content_items_list--ul'>
                                <li> <img src={tron}  width="10px" height="10px" alt="errol" /> 30A, Phu Tho Hoa, Tan Phu</li>
                                <li> <img src={tron}  width="10px" height="10px" alt="errol" />790, Huong Lo 2, Binh Tan</li>
                                <li> <img src={tron}  width="10px" height="10px" alt="errol" />45B, Le Van, P11,  Quan 5</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer_img_content_items'>
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <div className='footer_img_content_items_list'>
                            <ul className='footer_img_content_items_list--ul'>
                                <li> <img src={tron}  width="10px" height="10px" alt="errol" />0388392932</li>
                                <li> <img src={tron}  width="10px" height="10px" alt="errol" />fb/didongviet</li>
                                <li> <img src={tron}  width="10px" height="10px" alt="errol" />didongviet@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer_img_content_items'>
                        <h3>HÌNH THỨC THANH TOÁN</h3>
                        <div className='payitems'>
                                <div className='footer_img_content_items_list'>
                                    <ul className='footer_img_content_items_list--ul'>
                                        <li> <img src={paysam}   alt="errol" /></li>
                                        <li> <img src={payvisa}   alt="errol" /></li>
                                    </ul>
                                </div>
                                <div className='footer_img_content_items_list'>
                                    <ul className='footer_img_content_items_list--ul'>
                                        <li> <img src={paypal}   alt="errol" /></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className='footer_img_content_items margin_item_right'>
                        <h3>ĐỐI TÁC UY TÍN</h3>
                        <div className='payitems'>
                                    <div className='footer_img_content_items_list'>
                                        <ul className='footer_img_content_items_list--ul'>
                                            <li> <img src={doitac1} alt="errol" /></li>
                                            <li> <img src={doitac2} alt="errol" /></li>
                                    
                                        </ul>
                                    </div>
                                    <div className='footer_img_content_items_list'>
                                                <ul className='footer_img_content_items_list--ul'>
                                                        <li> <img src={doitac3} alt="errol" /></li>
                                                        <li> <img src={doitac4} alt="errol" /></li>
                                                </ul>
                                            </div>
                                    </div>
                    </div>
              </div>
      </div>
  )
}
export default Footer;