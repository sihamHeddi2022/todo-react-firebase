
import React from "react";

function Add() {
    return ( 
      <div>
            <div className="container px-5 my-4">
        <form className=" w-50 mx-auto  bg-white p-4">
        <h3 className="text-center my-2">Add Task Page</h3>
         {/*
            
             - name of task
             - description 
             - color of task
            - schedule
            - share with user
            - status :
                - in progress
                - todo (by default )
                - completed
         
         
         
         */}
          <div className="form-group">
            <input
              type="text"
              placeholder="name of task"
              
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
              <select name="" id=""    className="form-control">
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
                    
                    className="form-control"
                    />
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