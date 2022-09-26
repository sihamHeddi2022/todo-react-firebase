import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../img/todo.png"
import  "../style/style.css";
function Navbar() {
    return (  <div>
           
          <div className="container mt-3 nav text-center">
             <div className="d-fex   w-100">
                <img src={img} className="imglogo" alt="logo"/>
                <h4>TODO LIST APP</h4>
             </div>
             <div className="d-flex flex-row  justify-content-center navlink w-100">
             
               <NavLink to="/login" >Login</NavLink>
               <NavLink  to="/register">Register</NavLink>
               <NavLink  to="/logout">Log out </NavLink>
               <NavLink  to="/dashboard">Dashboard</NavLink>
             
             </div>
          </div>


 </div> );
}

export default Navbar;