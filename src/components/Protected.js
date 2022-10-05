import { Redirect } from "react-router-dom";
import React from 'react';

function NotAuth(props) {
    
    return ( 
        <div>{
            props.user ? <Redirect to="/dashboard"/>  : props.cildren
        }</div> 
     );
}

export default NotAuth;


