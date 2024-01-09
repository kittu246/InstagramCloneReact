import React from 'react'
import profile from '../assets/profile.jpeg';
import { suggestedUser } from '../data';

const SuggestedUsers = () => {
  return (
    <div >
        <div className='suggestedCard'>
        <div className='suggestedCardLeft'>   
        <div className='profile'>
            <img src={profile} alt='K'/>
        </div>
            <div>
                <h5>kittuburman1996</h5>
                <p>Kritika Burman</p>
            </div>
        </div> 

        <a href='https://www.facebook.com'>Switch</a>
        </div>
        <p style={{fontWeight:'bold',margin:'.5rem 0'}}>Suggested For you </p>
        <div>
            {suggestedUser.map(user =>{
                return <div key={user.id}className='suggestedCard'>
                <div className='suggestedCardLeft'>   
                <div className='profile'>
                    <img src={user.profile} alt='K'/>
                </div>
                    <div>
                        <h5>{user.user}</h5>
                        <p>Kritika Burman</p>
                    </div>
                </div> 
        
                <a href='https://www.facebook.com'>Switch</a>
                </div>
            })}

        </div>

    </div>

  )
}

export default SuggestedUsers