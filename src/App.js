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



function App (){
    
    const [user,setUser]= useState(null)
   
    useEffect(()=>{
     firebase.auth().onAuthStateChanged((user)=>{
      console.log(user);
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
                <Login/>
              </Route>
              
              <Route path='/register'>
                  <Register/>
              </Route>
              <Route path='/dashboard'>
                  <Dashboard/>
              </Route>
              <Route path='/add'>
                  <Add/>
              </Route>
              <Route path='/edit/:id'>
                  <Edit/>
              </Route>
            </Switch>
        </context.Provider>
      </div>
    );
  }


export default App;
