import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../services/user";
import '../index.css';

const SignupPage =(props)=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    //navigation
    const navigate=useNavigate()
    const onSignup=async ()=>{
        if(username.length===0){
            alert(`Enter Username`)
        }
        else if(email.length===0){
            alert(`Enter Username`)
        }
        else if (password.length===0){
            alert(`Enter Password`)
        }else{
            const result= await signup(username,email,password)
            if(result){
                navigate('/signup')
            }
        }
    }
    return( 
    <div>
        <h1 className="header">SignUp</h1>
        <div className="form">
            <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input onChange={(e)=>{
                    setUsername(e.target.value)
                    }} type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Email</label>
                <input onChange={(e)=>{
                   setEmail(e.target.value)
                }} type='email' className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
            <div>Already have an account? Signin <Link to="/signin">here</Link></div>
              <button onClick={onSignup} className="btn btn-success">SignUp</button> 
            </div>
        </div>

    </div>
    ) 
}
export default SignupPage