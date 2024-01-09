import { db, auth } from "./firebase";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { useEffect, useState } from "react";
import Login from "./components/Login";
// import { useGlobalContext } from './GlobalContext';
import Signup from "./components/Signup";
import ImageUpload from "./components/ImageUpload";

import FollowerStory from "./components/FollowerStory";
import SuggestedUsers from "./components/SuggestedUsers";
import { BottomData,TopData } from "./data";

function App() {
  

  const [posts, setPosts] = useState([]);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [openUpload, setOpenUpload] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    db.collection("intsgram_clone")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {

        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        // console.log(authUser);
        setUser(authUser);
        // console.log("user",user)

        if (authUser.displayName) {
          // old user
        } else {
          //new user
          authUser.updateProfile({
            displayName: userName,
          });
        }
      } else {
        //user Logged out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userName, user]);

  const handleSignUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: userName });
      })
      .catch((error) => alert(error.message));

    setOpenSignup(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: userName });
      })
      .catch((error) => alert(error.message));

    setOpenLogin(false);
  };

  const handleUploadShow =(id) =>{
    console.log('hyuj')
    if(id === 7){
      setOpenUpload(true)
    }
  }

  return (
    <div className="App">
      <Navbar
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        setOpenSignup={setOpenSignup}
        setOpenUpload={setOpenUpload}
        user={user}
        handleUploadShow={handleUploadShow}
      />
      <div className="postBox">
        <div className="postBoxLeft">
          <FollowerStory/>
          <div className='userPostBox'>
            {posts.map(({ id, post }) => (
              
              <Post
                key={id}
                postId={id}
                userName={post.userName}
                caption={post.caption}
                imageUrl={post.imageURL}
                user={user?.displayName}
              />
            ))}
          </div>
        </div>

        <div className="postBoxRight">

          <SuggestedUsers/>

        </div>
      </div>

      {openLogin && <Login handleLogin={handleLogin} />}
      {openSignup && (
        <Signup

          email={email}
          password={password}
          userName={userName}
          setEmail={setEmail}
          setPassword={setPassword}
          setUserName={setUserName}
          handleSignUp={handleSignUp}
        />
      )}
     {openUpload && (
  user?.displayName ? (
    <ImageUpload userName={user.displayName} setOpenUpload={setOpenUpload} />
  ) : (
    <></>
  )
)}

<div className ='topMobMenu'>
  
<img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />
        <div >
          {TopData.map((data)=>{return <div  key={data.id}>{data.symbol}</div>})}

        </div>
</div>
    <div className='mobMenu'>
      {BottomData.map((data) =>{
        return <div key={data.id} onClick={() =>{handleUploadShow(data.id)}} >
          {data.symbol}

        </div>
      })}
      </div>  
    </div>
  );
}

export default App;
