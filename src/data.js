import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { TbMessageCircleBolt } from "react-icons/tb";
import profile from './assets/profile.jpeg'

import profile1 from './assets/userProfile/profile1.jpg'
import profile2 from './assets/userProfile/profile2.jpg'
import profile3 from './assets/userProfile/profile3.jpg'
import profile4 from './assets/userProfile/profile4.jpg'
import profile5 from './assets/userProfile/profile5.jpg'
import profile6 from './assets/userProfile/profile6.jpg'
import profile7 from './assets/userProfile/profile7.jpg'
import profile8 from './assets/userProfile/profile8.jpg'
import profile9 from './assets/userProfile/profile9.jpg'

export const TopData =[
    {
        id:1,
        
        symbol:<IoIosHeartEmpty/>,

    },

    {
        id:2,
        
        symbol:<TbMessageCircleBolt/>,

    }

]
export const BottomData =[
    {
        id:1,
        
        symbol:<IoMdHome/>,
    },
    {
        id:2,
        
        symbol:<CiSearch/>,
    },
    
    
   
    
    {
        id:7,
        
        symbol:<FiPlusCircle/>,
    },
    {
        id:4,
        
        symbol:<MdVideoLibrary/>,
    },
    {
        id:5,
        
        symbol:<div className='profile'>
            <img src={profile} alt='K'/>
        </div>,
    }
    
]

export const data =[
    {
        id:1,
        text:"Home",
        
        symbol:<IoMdHome/>,
    },
    {
        id:2,
        text:"Search",
        symbol:<CiSearch/>,
    },
    {
        id:3,
        text:"Explore",
        symbol:<MdOutlineExplore/>,
    },
    {
        id:4,
        text:"Reels",
        symbol:<MdVideoLibrary/>,
    },
    {
        id:5,
        text:"Messages",
        symbol:<HiOutlinePaperAirplane/>,
    },
    {
        id:6,
        text:"Notification",
        symbol:<IoIosHeartEmpty/>,
    },
    {
        id:7,
        text:"Create",
        symbol:<FiPlusCircle/>,
    },
    {
        id:8,
        text:"Profile",
        symbol:<div className='profile'>
            <img src={profile} alt='K'/>
        </div>,
    },
    {
        id:9,
        text:"More",
        symbol:<IoMenu/>,
    }
]


export const userProfiles = [

    profile1,profile2,profile3,profile4,profile5,profile6,profile7,profile8,profile9

]

export const suggestedUser =[
    {
        id:1,
        user:"shubhan12",
        profile:profile9
    },

    {
        id:2,
        user:"saileshgy2345",
        profile:profile6
    },

    {
        id:3,
        user:"nabhyt@12",
        profile:profile5
    },

    {
        id:4,
        user:"kithftter5678",
        profile:profile2
    },

    {
        id:5,
        user:"natakg$3@",
        profile:profile3
    },

    {
        id:6,
        user:"dur@755",
        profile:profile4
    }


]