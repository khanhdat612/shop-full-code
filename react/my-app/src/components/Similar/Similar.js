import React from 'react';
import "typeface-roboto";
import {DataIosSimilar} from "../../services/DataIosSimilar.js"
import "./ProductItem.scss";
import roi1 from "../../images/roi1.png";
import ios1 from "../../images/spbanchay1.png";
import addcart from "../../images/addcart.png";
import addlove from "../../images/love.png";

function Item(props) {
    console.log(DataIosSimilar)
    return (
            <div>
                <div className='product_block'>
                    <div className='item_container'>
                        <div className='item_container_img'>
                            <img src={props.picture} alt="Đang chờ database" />
                        </div>
                        <div className='item_container_sale'>
                            <p>sale</p>
                        </div>
                        <div className='item_container_love'>
                            <img src={addlove} alt="A" />
                        </div>
                        <div className='item_container_price'>
                            <div className='item_container_price_title'>
                            <h3>{props.name}</h3>
                            </div>
                            <div className='item_container_price_vnd'>
                                <div className='item_container_price_vnd_left'>
                                    <p className='item_container_price_vnd_left--p1'>{props.sale}</p>                        
                                    <p className='item_container_price_vnd_left--p2'>{props.money}</p>                        
                                </div>
                                <div className='item_container_price_vnd_right'>
                                    <div className='item_container_price_vnd_right_item'>
                                        <img src={addcart} alt="A" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item_container_background'></div>
                </div>
            </div>
    )
}
export default Item;