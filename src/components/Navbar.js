// import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { IoMdHome } from "react-icons/io";
// import { HiOutlinePaperAirplane } from "react-icons/hi";
// import { MdOutlineExplore } from "react-icons/md";
// import { IoIosHeartEmpty } from "react-icons/io";
// import profile from "../assets/profile.jpeg";
import { auth } from "../firebase";
import { data } from "../data";
// import {useGlobalContext} from '../GlobalContext'

const Navbar = ({ openLogin, setOpenLogin, setOpenSignup,setOpenUpload, user, setUser,handleUploadShow }) => {
  // const {openLogin,setOpenLogin,setOpenSignup} = useGlobalContext();
  console.log("navbarUser", user);


  return (
    <nav>
      <div className="topNav">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />
      </div>
      <div className="bottomNav">
        {data.map(((item) =>{
          return <div key ={item} className='navCard' onClick={() =>{handleUploadShow(item.id)}}>
            <div>{item.symbol}</div>
            <p>{item.text}</p>
          </div>
        }))}

      </div>
    <div className = 'footerNav'>    
      {user ? (
        <button className='btn'
          onClick={() => {
            auth.signOut();
          }}
        >
          LogOut
        </button>
      ) : (
        <div>
          <button className='btn'
            onClick={() => {
              setOpenLogin(true);
            }}
          >
            Log In
          </button>
          <button  className='btn'
            onClick={() => {
              setOpenSignup(true);
            }}
          >
            Sign Up{" "}
          </button>
        </div>
      )}

    </div>
    </nav>
  );
};

export default Navbar;
