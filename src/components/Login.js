import React from 'react'
import { FaFacebook } from "react-icons/fa";
const Login = ({handleLogin}) => {
  return (
    <div className='modalBody'>
        <div className='modal' >
            <img className='instaLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XLUXi-2GZYvN5WrgBIOpiHJB5YlAwFkw4aaJLRuKRg&s' alt='instagramLogo'/>
            <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='instagramLogo'/>
          <form onSubmit={handleLogin}>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Login</button>

          </form>   
            <div className='orSection'>
                <div className='horizontalLine'></div>
                <p>OR</p>
                <div className='horizontalLine'></div>
            </div>

            <p className ='facebook'> <FaFacebook style={{color:'rgb(17, 177, 241)',fontSize:'18px'}} /> Log in with Facebook</p>

            <p>Forgot password ?</p>

            <div className='signupPara'>

            <p>Don't have an account?</p>
            <button id='signUpButton'>SignUp</button>

            </div>

            




        </div>

    </div>

  )
}

export default Login 