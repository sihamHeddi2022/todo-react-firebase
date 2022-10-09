import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { context } from '../context/context';
import { deleteTasks, getTasks, updateSt } from '../firebase/firebase';


function Dashboard() {
    
    const c = useContext(context)
    
    const th = {
        "1":{
            color:"white",
            backgroundColor:"orange"
        },
        "2":{
            color:"white",
            backgroundColor:"red"
        },
        "3":{
            color:"black",
            backgroundColor:"white"
        },
        "4":{
            color:"white",
            backgroundColor:"black"
        },
    }


    const history = useHistory()

    const [tasks,setTasks] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const [message,setMessage]=useState("")

    const updateStatus = async(e,id)=>{
        
        const d=await updateSt(id,e.target.value) 
        if(d.success) {
            get()
        }
        if(d.error) console.log(d.error); 
    }
    const get = async()=>{
        const tasks = await getTasks(c.user.uid)
     
        if(tasks.tasks) {
            setTasks(tasks.tasks)
            setIsLoading(false)
            console.log(tasks.tasks);
        }
        else console.log(tasks.err);
       
   }
   
   const editTask = (id)=>{
     history.push("/edit/"+id)
   }

    const deleteT =async(id)=>{
        const d = await deleteTasks(id)
        if(d.success) {setMessage("The task has been deleted") 
        get()}
        else setMessage("Internal error server")
        setTimeout(() => {
            setMessage("")
        }, 3000);
    }


    useEffect(()=>{
  
        get()
    },[])
    return ( <div>
      

        <div className="container my-4">
            
            <div className="d-flex justify-content-center">
                <Link  to="/add" className='mr-3' > + Add Task </Link>
            </div>
            {
            message && <div>
                {message}
            </div>
         }
        {/* - name of task
        - description 
        - color of task
        - schedule
        - share with user
        - status :
            - in progress
           - todo (by default )
           - completed */}
            <div className="tasks px-5 mt-3" >
                {
                    !isLoading && tasks && tasks.length>0 && tasks.map(({task,id})=>(
                        <div className="task px-4 mt-3 py-3 ro
                        unded rounded-5 t" onDoubleClick={()=>editTask(id)} style={th[task.theme]} key={id}>
                        
                        <h4>
                            {task.name}
                        </h4>
                        <small>
                              {task.date}
                        </small>
                        <p>
                            {task.description}
                        </p>
                     
                        <div className="d-flex justify-content-between">
                       
                            <div className="d-flex align-items-center">
                          
                               <select className='mx-2 form-control' value={task.status}  onChange={(e)=>updateStatus(e,id)}>
                                
                                   <option value="1" >In Progress</option>
                                   <option value="-1">Todo</option>
                                   <option value="0">Completed</option>
                                </select>
                                <button className='btn btn-danger' onClick={()=>deleteT(id)}>
                                <i className="bi bi-trash3"></i>  Delete
                                </button>
                            </div>
                      </div>

                </div>
                    ))
                }
       
        
            </div>
 



        </div>


 </div>  );
}

export default Dashboard;