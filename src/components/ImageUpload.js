import {useState} from 'react';

import {storage, db} from '../firebase';
import firebase from 'firebase';

const ImageUpload = ({userName,setOpenUpload}) => {

    console.log(userName)
    const[image,setImage] = useState(null);
    const[caption,setCaption] = useState('');
    const[progress,setProgress] = useState(0);

    const handleChange =(e) =>{

        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }

    }

    const handleUpload=() =>{
        console.log(image.name);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        console.log(uploadTask);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) *100
                    );
                    setProgress(progress);
            },
            (error)=>{
                alert(error.message);
            },
            () =>{
                //complete function
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    //post image in database
                    console.log(url);
                    db.collection("intsgram_clone").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption :caption,
                        imageURL :url,
                        userName :userName,
                    });
                    setProgress(0);
                    setImage(null);
                    setCaption('');
                    setOpenUpload(false);
                })
            }

        )
    }

  return (
    <div className='modalBody'>
    <div className='modal upload'>
        <h1 style={{color:'#E33E5C'}}>Image Upload</h1>
        
        <progress style={{width:"100%"}} value={progress} max='100' />
        <input className='uploadValue' type='text' placeholder='Enter Caption...' value={caption} onChange={(e) => setCaption(e.target.value)} />
        <input className='uploadValue' type='file' onChange={handleChange} />
        <button onClick={handleUpload}> Upload</button>
    </div>

    </div>
  )
}

export default ImageUpload