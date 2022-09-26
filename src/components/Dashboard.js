import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
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
                <div className="task px-4 py-3 rounded rounded-5 text-white" style={{backgroundColor:"green"}}>
                        
                        <h4>
                            Name of task
                        </h4>
                        <small>
                              23/05/2022 - 04:00
                        </small>
                        <p>
                            description
                        </p>
                     
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mb-0">
                       
                    
                                    <div className='d-flex flex-column align-items-center'>
                                        <small className='my-1'>
                                             Shared With
                                         </small> 
                                        <div className="d-flex">
                                           <img  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=40" className="rounded-circle mr-2" alt="Cinque Terre"/>
                                            
                                            <h6>
                                                full name
                                            </h6>
                                        </div>
                                    </div>
                                    <p className='ml-4 mt-3'>
                                        status
                                    </p>
                            </div>
                            <div className="d-flex align-items-center">
                          
                               <select className='mx-2 form-control'>
                                
                                   <option value="1">In Progress</option>
                                   <option value="0">Completed</option>
                                </select>
                                <button className='btn btn-danger'>
                                <i class="bi bi-trash3"></i>  Delete
                                </button>
                            </div>
                      </div>

                </div>
                <div className="task my-3 px-4 py-3 rounded rounded-5 text-white" style={{backgroundColor:"orange"}}>
                        
                        <h4>
                            Name of task
                        </h4>
                        <small>
                              23/05/2022 - 04:00
                        </small>
                        <p>
                            description
                        </p>
                     
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mb-0">
                       
                    
                                    <div className='d-flex flex-column align-items-center'>
                                        <small className='my-1'>
                                             Shared With
                                         </small> 
                                        <div className="d-flex">
                                           <img  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=40" className="rounded-circle mr-2" alt="Cinque Terre"/>
                                            
                                            <h6>
                                                full name
                                            </h6>
                                        </div>
                                    </div>
                                    <p className='ml-4 mt-3'>
                                        status
                                    </p>
                            </div>
                            <div className="d-flex align-items-center">
                          
                               <select className='mx-2 form-control'>
                                
                                   <option value="1">In Progress</option>
                                   <option value="0">Completed</option>
                                </select>
                                <button className='btn btn-danger'>
                                <i class="bi bi-trash3"></i>  Delete
                                </button>
                            </div>
                      </div>

                </div>
            </div>
 



        </div>


 </div>  );
}

export default Dashboard;