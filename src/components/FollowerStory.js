import React from 'react'
import { userProfiles } from '../data'


const FollowerStory = () => {

   
  return (
    <div className='storyDiv'>
         
        {userProfiles.map((userProfile,index) =>{
            return <div className='storyOutLine' key={index}>
            <div className='singleStory' >
                <img src={userProfile} alt='userPhoto'/>
            </div>

            </div>

        })}

{/* </Slider> */}
    </div>
  )
}

export default FollowerStory