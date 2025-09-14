import "./login.css" 
import { useState } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc,setDoc } from "firebase/firestore";
import * as dicebear from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

const Login = () => {
    const[avatar,setAvatar]=useState({
        file:null,
        url:""
    })
    const handleAvatar=(e)=>{
        const file=e.target.files[0];
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }

    const [loading,setLoading] =  useState(false)

    const handleLogin=async(e)=>{
      e.preventDefault();
      setLoading(true)

      const formData = new FormData(e.target);

      const {username,email,password} = Object.fromEntries(formData);
      console.log("Email entered:", email);

      try{
        await signInWithEmailAndPassword(auth,email,password)

      }catch(err){
        console.log(err)
        toast.error(err.message)
        toast.error(`${err.code}: ${err.message}`);
      }finally{
        setLoading(false)
      }
    }

    const handleRegister=async(e)=>{
      e.preventDefault();
      setLoading(true)
      const formData = new FormData(e.target);

      const {username,email,password} = Object.fromEntries(formData);
      console.log("Hi")
      try{
        const res = await createUserWithEmailAndPassword(auth,email,password)

        await setDoc(doc(db,"users",res.user.uid),{
          username,
          email,
          id: res.user.uid,
          blocked:[]
        });



        

        await setDoc(doc(db,"userchats",res.user.uid),{
          chats:[]
        });
        toast.success("Account created")
        
      }
      catch(err){
        console.log(err)
        toast.error(err.message)
      }finally{
        setLoading(false)
      }
    }
    
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <form  onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={loading}>{loading?"loading":"Sign In"}</button>
        </form>
      </div>

      <div className="seperator">
        <div className="item">
          <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="file">
                <img src={avatar.url || "./avatar.png"} alt=""/>
                Upload an image</label>
            <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar} ></input>
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loading}>{loading?"loading":"Sign Up"}</button>
        </form>
      </div>
      </div>
      </div>
  )
}

export default Login
