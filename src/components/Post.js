import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';

import { FaHeart } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { db } from '../firebase';
import profile from '../assets/profile.jpeg'
import firebase from 'firebase'
import { IoIosSend } from "react-icons/io";



const Post = ({postId,userName,caption,imageUrl,user}) => {

  const [comments,setComments] = useState([]);

  const [comment,setComment] = useState('');
  const [isLike,setIsLike]= useState(false);

  useEffect(()=>{
    let unsubscribe;
    if(postId){
      unsubscribe = db
      .collection("intsgram_clone")
      .doc(postId)
      .collection("comments")
      .orderBy('timestamp' ,'desc')
      .onSnapshot((snapshot) =>{
        setComments(snapshot.docs.map((doc)=> doc.data()));
      })
    }

    return () =>{
      unsubscribe();
    }

  },[postId])

  const submitComment =(e)=>{
    e.preventDefault();
    db.collection("intsgram_clone")
    .doc(postId)
    .collection("comments").add({
      text:comment,
      userName:user,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setComment('');



  }

  return (
    <section className='post'>
    <div className='postHeader'>
       <div className='userProfile'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p>{userName}</p>
       </div>
       <div className='dotDiv'>
         <div className='bigDot'></div>
         <div className='bigDot'></div>
         <div className='bigDot'></div>
       </div>
    </div>   
       <div className='userPost'>
        <img src={imageUrl} alt={userName}/>

       </div>
       <div className='likeSection'>
        <div className='likeLeft'>
        <FaHeart className={isLike ? "liked" :"notLiked"} onClick={() => setIsLike(!isLike)}/>
        <FiMessageCircle/>
        <HiOutlinePaperAirplane/>

        </div>
        <div className='likeRight'>
        <FaRegBookmark/>

        </div>


       </div>
       <div className='comments'>
        <strong>{userName}</strong> {caption}
       </div>
       <div className='OtherComments'>
        {comments.map((comment,index) => <p key={index}>
            <strong>{comment.userName}</strong> {comment.text}
          </p>
          
        )}
       
       </div>
       <div className ='userComment'>
        <form onSubmit={submitComment}>
        <div className='profile'>
                    <img src={profile} alt='K'/>
                </div>
          <input type='text' placeholder='Add a comment...'
          value={comment} onChange={(e)=>setComment(e.target.value)}/>
          <button type='submit'><IoIosSend/></button>
        </form>
        </div>


    </section>
  )
}

export default Post