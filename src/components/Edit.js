
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getTask, updateTask } from "../firebase/firebase";

function Edit() {

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [theme,setTheme] = useState("")
  const [date,setDate] = useState("")
  const history = useHistory()
  
  const {id} = useParams()
  const get = async(id)=>{
     const d=await getTask(id)
     if(d.data) {
        setName(d.data.name)
        setTheme(d.data.theme)
        setDate(d.data.date)
        setDescription(d.data.description)
     }
     else console.log(d.error);
  }


  const edit = async(e)=>{
    e.preventDefault()
    const d = await updateTask({id,name,description,theme,date})
    if(d.success) history.push("/dashboard")
    else console.log(d.error);
  }



  useEffect(()=>{
    
   get(id) 
  },[])




    return ( 
      <div>
            <div className="container px-5 my-4">
        <form className=" w-50 mx-auto  bg-white p-4" onSubmit={edit}>
        <h3 className="text-center my-2">Edit Task Page</h3>

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
                  <textarea className="form-control" id="exampleFormControlTextarea1"  value={description}
              onChange={(e)=>setDescription(e.target.value)} placeholder="description" rows="3"></textarea>
          </div>
          <div className="form-group">
              <label> Schedule </label>
              <input className="form-control"  type="date"  value={date}
              onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <div className="form-group">
              <label> Theme</label>
              <select  value={theme}
              onChange={(e)=>setTheme(e.target.value)}   className="form-control">
                  <option value="1">drakula</option>
                  <option value="2">dangerous</option>
                  <option value="3">light</option>
                  <option value="4">dark</option>
              </select>
          </div>
        
          <button type="submit" className="btn btn-primary container">
            Submit
          </button>
     
        </form>
       
      </div>
      </div>
     );
}

export default Edit;