import React from "react";

function Login() {
  return (
    <div>
      <div className="container px-5 mt-2">
        <form className=" w-50 mx-auto  bg-white p-4">
        <h3 className="text-center my-2">Login Page</h3>

          <div class="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              
              className="form-control"
            />
          </div>
          
          <button type="submit" className="btn btn-primary container">
            Submit
          </button>
          <p className="text-center my-2">Or</p>
          <button type="submit" className="btn btn-secondary container">
               Using Google  <i class="bi bi-google"></i>
          </button>
        </form>
       
      </div>
    </div>
  );
}

export default Login;
