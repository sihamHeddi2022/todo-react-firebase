import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { context } from '../context/context';
import { logout } from '../firebase/firebase';
import img from "../img/todo.png"
import  "../style/style.css";

function Navbar() {

   const c = useContext(context)
   const history = useHistory()
  

   const signOut = async ()=>{
      
      

      const d = await logout()
    
      if(d.success) history.push("/login")
      else
        console.log(d.error)


   }



    return (  <div>
           
          <div className="container mt-3 nav text-center">
             <div className="d-fex   w-100">
                <img src={img} className="imglogo" alt="logo"/>
                <h4>TODO LIST APP</h4>
             </div>
             <div className="d-flex flex-row  justify-content-center navlink w-100">
               

               {!c.user && <NavLink to="/login" >Login</NavLink> }
               {!c.user && <NavLink  to="/register">Register</NavLink> }
               {c.user && <button className='btn ' onClick={signOut}>Log out </button> }
               {c.user && <NavLink  to="/dashboard">Dashboard</NavLink> }
             
             </div>
          </div>


 </div> );
}

export default Navbar;