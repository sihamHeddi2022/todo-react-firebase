import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../context/context';
import { getTasks } from '../firebase/firebase';


function Dashboard() {
    const c = useContext(context)
    const [tasks,setTasks] = useState()
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
       const get = async()=>{
            const tasks = await getTasks(c.user.uid)
         
            if(tasks.tasks) {
                setTasks(tasks.tasks)
                setIsLoading(false)
                console.log(tasks.tasks);
            }
            else console.log(tasks.err);
           
       }
        get()
    },[])
    return ( <div>
           
        <div className="container my-4">
            
            <div className="d-flex justify-content-center">
                <Link  to="/add" className='mr-3' > + Add Task </Link>
                <Link to="/reset">Clear All</Link>
            </div>
        {/* - name of task
        - description 
        - color of task
        - schedule
        - share with user
        - status :
            - in progress
           - todo (by default )
           - completed */}
            <div className="tasks px-5 mt-3">
                {
                    !isLoading && tasks && tasks.length>0 && tasks.map((task)=>(
                        <div className="task px-4 mt-3 py-3 rounded rounded-5 text-white" style={{backgroundColor:"green"}} key={task.id}>
                        
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
                          
                               <select className='mx-2 form-control' value={task.status}>
                                
                                   <option value="1" >In Progress</option>
                                   <option value="-1">Todo</option>
                                   <option value="0">Completed</option>
                                </select>
                                <button className='btn btn-danger'>
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