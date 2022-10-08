
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { context } from "../context/context";
import { addTask, searchUser } from "../firebase/firebase";

function Add() {
  
  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [owner,setOwner] = useState("")
  const [theme,setTheme] = useState("3")
  const c = useContext(context)
  const [date,setDate] = useState("")
  const history = useHistory()
  // const [users,setUsers] = useState()
  
  // const searchUsers = async(e)=>{
  //     const data = await searchUser(e.target.value)
      
  //     if(data.data)
  //      { 
  //        setUsers(data.data) 
  //        console.log("hi ",users);
  //       }
  //   }
 
  const add = async(e)=>{
        e.preventDefault()
        const d = await addTask({name,description,owner,theme,date,status:"-1"})
        if(d.success) history.push("/dashboard")
        else console.log(d.error);
  }


useEffect(()=>{
   setOwner(c.user.uid)


},[])

    return ( 
      <div>
            <div className="container px-5 my-4">
        <form className=" w-50 mx-auto  bg-white p-4" onSubmit={add}>
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
                  <textarea className="form-control" id="exampleFormControlTextarea1" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="description" rows="3"></textarea>
          </div>
          <div className="form-group">
              <label> Schedule </label>
              <input className="form-control"  type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <div className="form-group">
              <label> Theme</label>
              <select name="" id=""    className="form-control" value={theme}  onChange={(e)=>setTheme(e.target.value)}>
                  <option value="1">drakula</option>
                  <option value="2">dangerous</option>
                  <option value="3">light</option>
                  <option value="4">dark</option>
              </select>
          </div>
          {/* <div className="form-group"> */}
                {/* <input
                    type="text"
                    placeholder="Share With User"
                    onChange={searchUsers}
                    className="form-control"
                    /> */}
  
  {/* {
                      users && users.length>0 && <div style={{height:'13vh',marginTop:'2rem',marginLeft:'2rem',marginBottom:'.5rem',overflowY:"scroll"}}>
                      
                  {  users.map((user)=>{
                        <div className="form-check">
                          <input type="checkbox" class="form-check-input" value={user.displayName}/>
                          <label className="form-check-label">{user.displayName}</label>
                        </div>
                      })
                  }
                  

                  </div>  } */}
          {/* </div> */}
          <button type="submit" className="btn btn-primary container">
            Submit
          </button>
     
        </form>
       
      </div>
      </div>
     );
}

export default Add;