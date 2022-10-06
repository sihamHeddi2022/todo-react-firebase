import React, { useEffect, useState } from 'react';
import { Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from "./components/Dashboard"
import { Redirect } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import {context} from './context/context'
import firebase from 'firebase';
import NotAuth from './components/Protected';



function App (){
    
    const [user,setUser]= useState(null)
   
    useEffect(()=>{
     firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
     })
    },[])


    return (
      <div className="App">
        <context.Provider value={{user,setUser}}>
            <Navbar/>
            <Switch>
              <Route exact path='/'>
                <Redirect to="/login"/>
              </Route>
              
              <Route path='/login'>

                  <NotAuth user={user}>
                    <Login/>
                  </NotAuth>
             
              </Route>
              
              <Route path='/register'>
                
                  <NotAuth user={user}>
                    <Register/> 
                  </NotAuth>

              </Route>
              <Route path='/dashboard'>
                  {
                     user? <Dashboard/> :<Redirect to="/login"/>
                  }
              </Route>
              <Route path='/add'>
              {
                     user? <Add/> : <Redirect to="/login"/>
              }
              </Route>
              <Route path='/edit/:id'>
                {
                     user?
                  <Edit/> : <Redirect to="/login"/>
                }
              </Route>
            </Switch>
        </context.Provider>
      </div>
    );
  }


export default App;
