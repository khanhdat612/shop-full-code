import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "typeface-roboto";
import "../HomePage/HomePage.scss";
import Header from '../../components/Head/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Banner1 from "../../images/banner1.png";
import Banner2 from "../../images/banner2.png";
import spbanchay1 from "../../images/spbanchay1.png";
import spbanchay2 from "../../images/spbanchay2.png";
import spbanchay3 from "../../images/spbanchay3.png";
import spbanchay4 from "../../images/spbanchay4.png";
import sphot1 from "../../images/sphot1.png";
import sphot2 from "../../images/sphot2.png";
import sphot3 from "../../images/sphot3.png";
import sphot4 from "../../images/sphot4.png";
import sphot5 from "../../images/sphot5.png";
import sphot6 from "../../images/sphot6.png";
import sphot7 from "../../images/sphot7.png";
import sphot8 from "../../images/sphot8.png";
import baohanh from "../../images/baohanh.png";
import money from "../../images/money.png";
import ship from "../../images/ship.png";
import quatang from "../../images/quatang.png";
// import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <React.Fragment>
            <div className='container_content'>
                {/* <img src={backgroundWeb}  alt="errol" /> */}
                <div className='homepage'>
                        <Header />
                </div>
                <div className='container_homepage'>
                    <div className='homepage_content'>
                        <div className='homepage_content_left'>
                            <div className='homepage_content_left_banner1'>
                                <img src={Banner1}  alt="errol" />
                            </div>
                            <div className='homepage_content_left_banner2'>
                                <img src={Banner2}  alt="errol" />
                            </div>
                        </div>
                        <div className='homepage_content_right'>
                            <div className='homepage_content_right_title'>
                                <h2>SẢN PHẨM BÁN CHẠY</h2>
                            </div>
                            <div className='homepage_content_right_img'>
                                <div className='homepage_content_right_item1'>
                                    <div className='homepage_content_right_item1_img1'>
                                        <img src={spbanchay1}  alt="errol" />
                                    </div>
                                    <div className='homepage_content_right_item1_img2'>
                                        <img src={spbanchay2}  alt="errol" />
                                    </div>
                                </div>
                                <div className='homepage_content_right_item2'>
                                    <div className='homepage_content_right_item2_img1'>
                                        <img src={spbanchay3}  alt="errol" />
                                    </div>
                                    <div className='homepage_content_right_item2_img2'>
                                        <img src={spbanchay4}  alt="errol" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    
                    </div>
                    <div className='home_product' style={{textAlign:"center", fontSize:"25px", fontWeight:"700", backgroundColor:"#313552", color:"white", margin:"0px 100px", marginTop:"50px", borderRadius:"12px", padding:"10px 0"}}>
                        <h1>XEM SẢN PHẨM</h1>
                    </div>
                    <div className='option'>
                        <div className='option_android'>
                            <button>
                                <Link className='option_a' to="/android" >ANDROID</Link>
                            </button>
                        </div>
                        <div className='option_ios'>
                            <button>
                                <Link className='option_a' to="/iphone" >IOS</Link>
                            </button>
                        </div>
                        <div className='option_accessory'>
                            <button className='hover_accessory'>
                                <Link className='option_a' to="/accessory"> PHỤ KIỆN</Link>
                            </button>
                        </div>
                    </div>
                    <div className='product_hot'>
                        <div className='product_hot_title'>
                            <h2>SẢN PHẨM NỔI BẬT</h2>
                        </div>
                        <div className='product_hot_items1'>
                            <div className='product_hot_items1_item'>
                                <img src={sphot1} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>iphone 14 promax</p>
                                </div>
                            </div>
                            <div className='product_hot_items1_item'>
                                <img src={sphot2} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>AirPod Pro</p>
                                </div>
                            </div>
                            <div className='product_hot_items1_item'>
                                <img src={sphot3} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>Samsung S22 Ultra</p>
                                </div>
                            </div>
                            <div className='product_hot_items1_item'>
                                <img src={sphot4} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>iphone 13 promax</p>
                                </div>
                            </div>

                        </div>
                        <div className='product_hot_items1'>
                            <div className='product_hot_items1_item'>
                                <img src={sphot5} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>Samsung Galaxy Z Flip 4</p>
                                </div>
                            </div>
                            <div className='product_hot_items1_item'>
                                <img src={sphot6} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>Samsung Galaxy Z Fold 4</p>
                                </div>
                            </div>
                            <div className='product_hot_items1_item'>
                                <img src={sphot7} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>Xiaomi 12T Pro</p>
                                </div>
                            </div>
                            <div className='product_hot_items1_item'>
                                <img src={sphot8} alt="errol" />
                                <div className='product_hot_items1_item_name'>
                                    <p className='product_hot_items1_item_name--p'>Xiaomi Note 11 Pro</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='policy'>
                        <div className='policy_title'>
                            <h2>CHÍNH SÁCH HỖ TRỢ</h2>
                        </div>
                        <div className='policy_items'>
                            <div className='policy_items_item'>
                                <img src={ship} alt="errol" />
                                <div className='policy_items_item_ship'>
                                    <p className='policy_items_item_ship--p'>FREE SHIP</p>
                                </div>
                            </div>
                            <div className='policy_items_item'>
                                <img src={money} alt="errol" />
                                <div className='policy_items_item_ship'>
                                    <p className='policy_items_item_ship--p' style={{background: "#94CEC4"}}>TRẢ GÓP 0%</p>
                                </div>
                            </div>
                        </div>
                        <div className='policy_items'>
                            <div className='policy_items_item'>
                                <img src={baohanh} alt="errol" />
                                <div className='policy_items_item_ship'>
                                    <p className='policy_items_item_ship--p' style={{background:"#94CEC4"}}>BẢO HÀNH 12 THÁNG</p>
                                </div>
                            </div>
                            <div className='policy_items_item'>
                                <img src={quatang} alt="errol" />
                                <div className='policy_items_item_ship'>
                                    <p className='policy_items_item_ship--p' style={{background: "#1D59B7"}}>QUÀ TẶNG HẤP DẪN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
  )
}
export default HomePage;