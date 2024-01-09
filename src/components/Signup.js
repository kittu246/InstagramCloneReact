import React from 'react'
import { FaFacebook } from "react-icons/fa";
const Signup = ({email,password,userName,setEmail,setPassword,setUserName,handleSignUp}) => {
  return (
    <div className='modalBody'>
        <div className='modal' >
            
        <img className='instaLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XLUXi-2GZYvN5WrgBIOpiHJB5YlAwFkw4aaJLRuKRg&s' alt='instagramLogo'/>
            <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='instagramLogo'/>
            <p>Sign up to see photos and videos from your friends</p>



            <p className ='facebook'> <FaFacebook style={{color:'rgb(17, 177, 241)',fontSize:'18px'}} /> Log in with Facebook</p>

            <div className='orSection'>
                <div className='horizontalLine'></div>
                <p>OR</p>
                <div className='horizontalLine'></div>
            </div>

            <form  onSubmit={handleSignUp}>

            <input onChange={(e) =>{setUserName(e.target.value)}} value={userName} type='text' placeholder='UserName' />
            <input onChange={(e) =>{setEmail(e.target.value)}} value={email} type='text' placeholder='Email' />
            <input  onChange={(e) =>{setPassword(e.target.value)}} value={password} type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>

            </form>
            

            <p>By signing up, you agree to our Terms & Privacy Policy</p>

           

            

            




        </div>

    </div>

  )
}

export default Signup 