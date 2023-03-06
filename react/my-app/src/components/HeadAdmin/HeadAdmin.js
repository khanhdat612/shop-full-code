import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "typeface-roboto";
import "./HeadAdmin.scss";
import Login from '../../views/Login.js';
import logoAdmin from "../../images/logoAdmin.png";
import Menu from "../../images/menuAdmin.png";
import User from "../../images/userAdmin.png";


function HeadAdmin() {
    return (
      <div>
        <div className='head_admin'>
            <div className='head_admin_logo'>
                <img src={logoAdmin}  width='50px' height='50px'/>
            </div>
            <div className='head_admin_menu'>
                <div className='head_admin_menu_name'>
                    <img src={User} width='50px' height='50px' alt="errol" />
                    <p>Admin</p>
                </div>
                {/* <div className='head_admin_menu_list'>
                    <img src={Menu} width='50px' height='30px' alt="errol" />
                </div> */}
            </div>
        </div>
      </div>
  )
}
export default HeadAdmin;