import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import { login, signInWithGoogle } from "../firebase/firebase";

function Login() {
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const [errors,setErrors] = useState({})

  const history = useHistory() 

   const loginGoogle =  async ()=>{
    
     const d = await signInWithGoogle()
     
     if(d.success)
       history.push("/dashboard")

   }
   
   
   const loginEmail = async(e)=>{
    
        e.preventDefault()
        
        setErrors({})
      
         let errs =  {}

        if(email && password)
         {
                          
           const d = await login(email,password) 
       
            if(d.success) {

              history.push("/dashboard")
            
            }
          
            else {
              errs.error = d.message
            }

   
      
           
         }

        if(!email) {
       
          errs.email = "the email must be required" 
          
          }

        if(!password) {
         errs.password="the password must be required"
        }

    
        
        setErrors(errs)
   }
  



  return (
    <div>
      <div className="container px-5 mt-2">
        <form className=" w-50 mx-auto  bg-white p-4" onSubmit={loginEmail}>
        <h3 className="text-center my-2">Login Page</h3>

        {errors.error &&
            <div className="alert alert-danger" role="alert">
            { errors.error}
            </div>
            }
          <div className="form-group">
           
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-describedby="emailHelp"
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
  
            />

          {
           errors.email &&
            <div className="alert alert-danger" role="alert">
             {errors.email}
            </div>
       
          }
            
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
            {errors.password &&
            <div className="alert alert-danger" role="alert">
             {errors.password}
            </div>
            }
          </div>
          
          <button type="submit" className="btn btn-primary container">
            Submit
          </button>
          <p className="text-center my-2">Or</p>
          <button type="button" className="btn btn-secondary container"  onClick={loginGoogle} >
               Using Google  <i className="bi bi-google"></i>
          </button>
        </form>
       
      </div>
    </div>
  );
}

export default Login;
