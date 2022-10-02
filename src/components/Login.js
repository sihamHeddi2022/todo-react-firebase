import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../firebase/firebase";

function Login() {
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const [errors,setErrors] = useState([])

  const history = useHistory() 

   const loginEmail = async(e)=>{
    
        e.preventDefault()
        let errs =  errors
          
        if(!email) setErrors(errs.push("the email must be required"))
        if(!password) setErrors(errs.push("the password must be required"))
        else {
         
          errs = []
          setErrors(errs)
         
          const d = await login(email,password) 
          if(d.success) {
            history.push("/dashboard")
          }
          else {
            setErrors(errs.push(d.err))
          }

        }
       
     
       
   }


  return (
    <div>
      <div className="container px-5 mt-2">
        <form className=" w-50 mx-auto  bg-white p-4" onSubmit={loginEmail}>
        <h3 className="text-center my-2">Login Page</h3>

          <div className="form-group">
            {
              errors.length>0 && errors.map(error=>{
                <div class="alert alert-danger" role="alert">
                   {error}
                </div>
              })
            }
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-describedby="emailHelp"
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
  
  />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            
     
          </div>
          <div className="form-group">
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Your Password"
              
              className="form-control"
            />
          </div>
          
          <button type="submit" className="btn btn-primary container">
            Submit
          </button>
          <p className="text-center my-2">Or</p>
          <button type="button" className="btn btn-secondary container">
               Using Google  <i className="bi bi-google"></i>
          </button>
        </form>
       
      </div>
    </div>
  );
}

export default Login;
