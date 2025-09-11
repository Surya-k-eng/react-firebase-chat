import "./login.css" 
import { useState } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";



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


    const handleLogin=(e)=>{
      e.preventDefault();
      toast.warn("Login functionality is not implemented yet")
    }

    const handleRegister=async(e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);

      const {username,email,password} = Object.fromEntries(formData);
      console.log("Hi")
      try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
      }
      catch(err){
        console.log(err)
        toast.error(err.message)
      }
    }
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <form  onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
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
            <button>Sign Up</button>
        </form>
      </div>
      </div>
      </div>
  )
}

export default Login
