
import React, { useState } from "react";
import { searchUser } from "../firebase/firebase";

function Add() {
  
  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [owner,setOwner] = useState("")
  const [theme,setTheme] = useState("")
  const [date,setDate] = useState("")
  const [users,setUsers] = useState("")
  
  const searchUsers = async(e)=>{
      const users = await searchUser(e.target.value)
  }

    return ( 
      <div>
            <div className="container px-5 my-4">
        <form className=" w-50 mx-auto  bg-white p-4">
        <h3 className="text-center my-2">Add Task Page</h3>
    
          <div className="form-group">
            <input
              type="text"
              placeholder="name of task"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="description" rows="3"></textarea>
          </div>
          <div className="form-group">
              <label> Schedule </label>
              <input className="form-control"  type="date"/>
          </div>
          <div className="form-group">
              <label> Theme</label>
              <select name="" id=""    className="form-control"  onChange={(e)=>setTheme(e.target.value)}>
                  <option value="1">drakula</option>
                  <option value="2">dangerous</option>
                  <option value="3">light</option>
                  <option value="4">dark</option>
              </select>
          </div>
          <div className="form-group">
                <input
                    type="text"
                    placeholder="Share With User"
                    onChange={searchUsers}
                    className="form-control"
                    />
  
                  <div style={{height:'13vh',marginTop:'2rem',marginLeft:'2rem',marginBottom:'.5rem',overflowY:"scroll"}}>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">user1</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
                        <label class="form-check-label" for="exampleCheck2">user2</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck3"/>
                        <label class="form-check-label" for="exampleCheck2">user3</label>
                    </div>
                  </div>
          </div>
          <button type="submit" className="btn btn-primary container">
            Submit
          </button>
     
        </form>
       
      </div>
      </div>
     );
}

export default Add;