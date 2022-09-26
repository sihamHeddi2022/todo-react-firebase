import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from "./components/Dashboard"
import { Redirect } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App (){
  
    return (
      <div className="App">
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
    
      </div>
    );
  }


export default App;
