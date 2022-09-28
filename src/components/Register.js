import React, { useState } from 'react';
import {signInWithGoogle,registerWithEmailAndPassword} from "../firebase/firebase"

function Register() {


     const[name,setName] = useState("")
     const[password,setPassword] = useState("")
     const[confirmedPassword,setconfirmedPassword] = useState("")
     const[email,setEmail] =useState("")
     
     
     const register=(e)=>{
        e.preventDefault()
        if(name && name && email && confirmedPassword===password)
           registerWithEmailAndPassword({email,password,displayName:name})
     }
     

  
    return (  <div>
           
           <div className="container px-5 my-4">
        <form className=" w-50 mx-auto  bg-white p-4" onSubmit={register}>
        <h3 className="text-center my-2">Register Page</h3>
        <input type="text"               className="form-control my-3"
 name='full_name' placeholder='Full Name' required onChange={(e)=>setName(e.target.value)}/>
          <div className="form-group">

            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-describedby="emailHelp"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
            />
          </div>
   
          <input
              type="password"
              placeholder="Confirmed Password"
              required
              onChange={(e)=>setconfirmedPassword(e.target.value)}
              className="form-control"
            />
          <button type="submit" className="btn btn-primary container mt-4">
            Submit
          </button>
          <p className="text-center my-2">Or</p>
          <button type="button" className="btn btn-secondary container" onClick={()=>signInWithGoogle()}>
               Using Google  <i className="bi bi-google"></i>
          </button>
        </form>
       
      </div>


    </div> );
}

export default Register;