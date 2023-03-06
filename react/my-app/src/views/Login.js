import React from 'react';
import "typeface-roboto";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faCircleNotch, faFan } from '@fortawesome/free-solid-svg-icons';
function Login() {

  let navigate=useNavigate();
  const [user, setUser] = useState({username:'', password:''})

    const handleChange=(e) => { 
    setUser({ ...user, [ e.target.name ]: e.target.value });
  }
   const handleSubMit=(event) => {
   event.preventDefault();
 const  sendData ={
     username: user.username,
     password: user.password
   }
        axios.post('http://localhost/newCode/API_LOGIN/Login_React.php', sendData)
          .then((result) => {
            if (result.data.Status==='200')
            {
              window.localStorage.setItem('username', result.data.username); 
              if (result.data.username==='admin') {
                navigate('/listProduct')
              } else {
              navigate('/')
              }
              }
            else {
              alert("Vui lòng nhập đúng tài khoản");
            } 
        })
  }
  return (
    <React.Fragment>
      <div className='background'>
        <div className='background_top'>
          <div className='background_line'>
          </div>
            <h3 className='background_top_name'>MOBILE SHOP</h3>
        </div>
        <div className='background_center'>
          <div className='background_center_content'></div> 
          <div className='background_center_form'>
            <div className='background_center_form_total'>
              <div className='background_center_form_content'>
                  <div className='background_center_form_content_login'>
                    <h1>LOGIN</h1>
                  </div>
                  <div className='background_center_form_content_login2'>
                      <div className='background_center_form_content_line'></div>
                  <div className='background_center_form_content_register'>
                    <Link to="/register">
                        <span>REGISTER</span>
                    </Link>
                        <p className='background_center_form_content_register_p'>doesn’t have account ?</p>
                    </div>
                  </div>
              </div>
              
              <form onSubmit={handleSubMit}>
                          <div className='background_center_form_input'>
                            <div className='background_center_form_input1'>
                              <input class="input_width check1" onChange={handleChange} value={user.username} type="text" name='username' required="required"/>
                              <span className='background_center_form_input1--span'>Username</span>
                            </div>
                            <div className='background_center_form_input1'>
                              <input class="input_width check1" onChange={handleChange} value={user.password} type="text" name='password' required="required"/>
                              <span className='background_center_form_input1--span'>Password</span>
                            </div>
                          </div>
                          <div className='option'>
                            <div className='option_save'>
                              <input type="radio" />
                              <span>remember</span>
                            </div>
                            <div className='option_forgetpass'>
                              <a href='#'>Forget Password</a>
                            </div>
                          </div>
                          <div className='button_login'>
                            <button>Login</button>
                          </div>
              </form>
              <div className='line'>
                <span>or</span>
                <div className='line_bottom'></div>
              </div>
              <div className='facebook_google'>
                <button>
                  <FontAwesomeIcon icon={faCompactDisc} color="blue" spin />
                </button>
                <button>
                  <FontAwesomeIcon icon={faCompactDisc} color="blue" spin/>
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Login;